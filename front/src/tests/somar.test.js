const { somar } = require('../utils/somar');

describe('Função somar', () => {
  test('Deve somar corretamente dois números', () => {
    expect(somar(2, 3)).toBe(5);
  });
});
