import json
import asyncio
from channels.generic.websocket import AsyncWebsocketConsumer
from .models import Session, Question, Answer
from django.contrib.auth.models import User
from asgiref.sync import sync_to_async

class EnglishConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.session_id = self.scope['url_route']['kwargs']['session_id']
        self.session_group_name = f'session_{self.session_id}'

        await self.channel_layer.group_add(
            self.session_group_name,
            self.channel_name
        )

        await self.accept()

        session = await sync_to_async(Session.objects.get)(id=self.session_id)
        questions = await sync_to_async(list)(Question.objects.all())
        self.questions = questions[:20]  # Limite de 20 perguntas
        self.current_question_index = 0
        self.scores = {}

        await self.send_question()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.session_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        data = json.loads(text_data)
        user = self.scope['user']
        answer = data['answer']
        question = self.questions[self.current_question_index]

        is_correct = (answer == question.correct_answer)
        self.scores[user.username] = self.scores.get(user.username, 0) + (10 if is_correct else 0)

        if self.current_question_index < len(self.questions) - 1:
            self.current_question_index += 1
            await self.send_question()
        else:
            await self.send_ranking()
            self.close()

    async def send_question(self):
        question = self.questions[self.current_question_index]
        await self.channel_layer.group_send(
            self.session_group_name,
            {
                'type': 'send_message',
                'message': {
                    'question': question.text,
                    'question_id': question.id
                }
            }
        )
        await asyncio.sleep(60)  # Espera de 60 segundos antes de passar para a próxima pergunta

    async def send_ranking(self):
        ranking = sorted(self.scores.items(), key=lambda x: x[1], reverse=True)
        await self.channel_layer.group_send(
            self.session_group_name,
            {
                'type': 'send_message',
                'message': {
                    'ranking': ranking
                }
            }
        )
    
    async def send_message(self, event):
        message = event['message']
        await self.send(text_data=json.dumps(message))
