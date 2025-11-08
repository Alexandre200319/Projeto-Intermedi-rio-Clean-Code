function gerarPergunta() {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  const operador = ["+", "-"][Math.floor(Math.random() * 2)];

  return { a, b, operador };
}

function calcularResposta(a, b, operador) {
  if (operador === "+") return a + b;
  if (operador === "-") return a - b;
  throw new Error("Operador inválido");
}

function verificarAcerto(respostaUsuario, respostaCorreta) {
  return respostaUsuario === respostaCorreta;
}

module.exports = { gerarPergunta, calcularResposta, verificarAcerto };
