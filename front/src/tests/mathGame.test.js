const { calcularResposta, verificarAcerto, gerarPergunta } = require("../utils/mathGame");

describe("Módulo de Matemática - EducaPlay", () => {
  describe("gerarPergunta", () => {
    test("Deve retornar um objeto com as propriedades a, b, e operador", () => {
      const pergunta = gerarPergunta();
      expect(pergunta).toHaveProperty("a");
      expect(pergunta).toHaveProperty("b");
      expect(pergunta).toHaveProperty("operador");
    });

    test("Deve gerar números entre 0 e 9", () => {
      const pergunta = gerarPergunta();
      expect(pergunta.a).toBeGreaterThanOrEqual(0);
      expect(pergunta.a).toBeLessThan(10);
      expect(pergunta.b).toBeGreaterThanOrEqual(0);
      expect(pergunta.b).toBeLessThan(10);
    });

    test("Deve gerar um operador válido (+ ou -)", () => {
      const pergunta = gerarPergunta();
      expect(["+", "-"]).toContain(pergunta.operador);
    });
  });

  describe("calcularResposta", () => {
    test("Deve somar corretamente dois números", () => {
      expect(calcularResposta(3, 5, "+")).toBe(8);
    });

    test("Deve subtrair corretamente dois números", () => {
      expect(calcularResposta(9, 4, "-")).toBe(5);
    });

    test("Deve somar corretamente com números negativos", () => {
      expect(calcularResposta(-3, -5, "+")).toBe(-8);
    });

    test("Deve subtrair corretamente com números negativos", () => {
      expect(calcularResposta(-9, -4, "-")).toBe(-5);
    });

    test("Deve somar corretamente com zero", () => {
      expect(calcularResposta(10, 0, "+")).toBe(10);
    });

    test("Deve lançar erro para operador inválido", () => {
      expect(() => calcularResposta(2, 3, "*")).toThrow("Operador inválido");
    });
  });

  describe("verificarAcerto", () => {
    test("Deve verificar acerto corretamente", () => {
      expect(verificarAcerto(10, 10)).toBe(true);
      expect(verificarAcerto(8, 10)).toBe(false);
    });
  });
});
