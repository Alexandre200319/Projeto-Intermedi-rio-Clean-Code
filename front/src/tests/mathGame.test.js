const { calcularResposta, verificarAcerto } = require("../utils/mathGame");

describe("Módulo de Matemática - EducaPlay", () => {
  test("Deve somar corretamente dois números", () => {
    expect(calcularResposta(3, 5, "+")).toBe(8);
  });

  test("Deve subtrair corretamente dois números", () => {
    expect(calcularResposta(9, 4, "-")).toBe(5);
  });

  test("Deve lançar erro para operador inválido", () => {
    expect(() => calcularResposta(2, 3, "*")).toThrow("Operador inválido");
  });

  test("Deve verificar acerto corretamente", () => {
    expect(verificarAcerto(10, 10)).toBe(true);
    expect(verificarAcerto(8, 10)).toBe(false);
  });
});
