const { atualizarPontuacao } = require("../utils/scoreSystem");

describe("Sistema de Pontuação - EducaPlay", () => {
  test("Deve adicionar 10 pontos quando o usuário acerta", () => {
    expect(atualizarPontuacao(20, true)).toBe(30);
  });

  test("Não deve alterar pontuação quando o usuário erra", () => {
    expect(atualizarPontuacao(20, false)).toBe(20);
  });
});
