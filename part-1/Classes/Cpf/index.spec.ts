const validation = require('.');

const invalidCpfWithSameDigits = [
  '111.111.111-11',
  '222.222.222-22',
  '333.333.333-33'
];

const invalidCpfWithDifferentElevenDigits = [
  '123.456.12',
  '123.456.789-890'
];

describe('CPF', () => {
  it('should be able to validate a valid CPF', () => {
    const cpf = '935.411.347-80';
    const isValidCpf = validation.validate(cpf);
    expect(isValidCpf).toBeTruthy();
  });

  it('should not be able to validate a falsy CPF', () => {
    const cpf = '';
    const isValidCpf = validation.validate(cpf);
    expect(isValidCpf).toBeFalsy();
  });

  describe.each(invalidCpfWithSameDigits)
  ('should not be able to validate a CPF with same digits', (cpf) => {
    it(`${cpf}`, () => {
      const isValidCpf = validation.validate(cpf);
      expect(isValidCpf).toBeFalsy();
    });
  });

  describe.each(invalidCpfWithDifferentElevenDigits)
  ('should not be to validate a CPF is different than 11 digits', (cpf) => {
    it(`Cpf with ${cpf.length} digits`, () => {
      const isValidCpf = validation.validate(cpf);
      expect(isValidCpf).toBeFalsy();
    });
  });

  it('should not be able to validate an invalid CPF', () => {
    const cpf = '123.456.789-99';
    const isValidCpf = validation.validate(cpf);
    expect(isValidCpf).toBeFalsy();
  }); 
});