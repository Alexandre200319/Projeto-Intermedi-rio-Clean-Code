# 🎮 Plataforma Educacional — Mini Games Interativos

## 📚 Descrição do Projeto
Este projeto consiste em um sistema web desenvolvido originalmente para a disciplina **Projeto Integrador: Sistema Web**.  
A aplicação tem como objetivo oferecer uma plataforma educacional divertida e interativa para **crianças entre 6 e 10 anos**, através de **mini games** e **quiz de perguntas escolares** sobre disciplinas como **matemática**, **ciências**, **língua portuguesa** e **inglês**.

---

## 🎯 Objetivo
Promover o aprendizado de forma lúdica, estimulando a curiosidade e o raciocínio das crianças por meio de jogos educativos acessíveis via navegador.

---

## 🧩 Tecnologias Utilizadas
**Front-End:**  
- HTML5  
- CSS3  
- TypeScript  

**Back-End:**  
- Python (Flask)  
- SQLite (banco de dados local)

**Ferramentas de Qualidade e Testes:**  
- ESLint (para padronização de código)  
- Jest (para testes unitários)  

---

## 🔍 Principais Funcionalidades
- Login e cadastro de usuários;  
- Acesso a diferentes mini games educativos;  
- Sistema de pontuação e feedback;  
- Armazenamento de progresso e pontuações no banco de dados;  
- Interface amigável e voltada para o público infantil.

---

## ⚙️ Refatorações Realizadas (Clean Code)
Durante a refatoração, foram aplicadas boas práticas do livro *Clean Code* de Robert C. Martin:

### 🔸 **Organização e Estrutura**
- Reorganização das pastas por responsabilidade (front, backend, assets, db).  
- Separação de responsabilidades e modularização do código.  
- Melhoria nos nomes de variáveis e funções para refletirem melhor seu propósito.  

### 🔸 **Remoção de Code Smells**
- Eliminação de funções muito longas e trechos duplicados;  
- Centralização das conexões com banco de dados;  
- Criação de constantes e enums para valores fixos.  

### 🔸 **Boas Práticas**
- Uso de arrow functions no TypeScript;  
- Padronização de identação, espaçamento e convenções;  
- Inclusão de ESLint e correção de warnings automáticos.

---

## 🧪 Testes Implementados
- **Framework:** Jest  
- **Cobertura:** cerca de 50% das funções principais testadas  
- Testes de:
  - Validação de entrada do usuário;
  - Verificação de pontuação e feedback nos mini games;
  - Funções de comunicação com o banco de dados.

Para executar os testes:
```bash
npm install
npm test
