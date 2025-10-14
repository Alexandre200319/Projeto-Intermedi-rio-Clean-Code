from django.db import models
from common.models import BaseQuestion, BaseSession, BaseAnswer
from django.contrib.auth.models import User

class Question(BaseQuestion):
    pass

class Session(BaseSession):
    pass

class Answer(BaseAnswer):
    session = models.ForeignKey(Session, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='portuguese_answer_set')