function atualizarPontuacao(pontuacaoAtual, acertou) {
  if (acertou) return pontuacaoAtual + 10;
  return pontuacaoAtual;
}

module.exports = { atualizarPontuacao };
