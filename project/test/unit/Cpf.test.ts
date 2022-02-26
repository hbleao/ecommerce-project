import Cpf from '../../src/domain/entity/Cpf';

const invalidCpfWithSameDigits = [
  '111.111.111-11',
  '222.222.222-22',
  '333.333.333-33'
];

const invalidCpfWithDifferentElevenDigits = [
  '123.456.12',
  '123.456.789-890'
]

describe('CPF', () => {
  it('should be able to validate a valid CPF', () => {
    const valideCpf = '935.411.347-80';
    const cpf = new Cpf(valideCpf);
    expect(cpf.getValue()).toBe(valideCpf);
  });

  it('should not be able to validate a falsy CPF', () => {
    try {
      const invalidCpf = '';
      new Cpf(invalidCpf);
    } catch (error) {
      expect(error).toEqual(Error('CPF Inválido'));
    }
  });

  describe.each(invalidCpfWithSameDigits)
  ('should not be able to validate a CPF with same digits', (invalidCpf) => {
    it(`${invalidCpf}`, () => {
      try {
        new Cpf(invalidCpf);
      } catch (error) {
        expect(error).toEqual(Error('CPF Inválido'));
      }
    });
  });

  describe.each(invalidCpfWithDifferentElevenDigits)(
    'should not be to validate a CPF is different than 11 digits', (invalidCpf) => {
    it(`Cpf with ${invalidCpf.length} digits`, () => {
      try {
        new Cpf(invalidCpf);
      } catch (error) {
        expect(error).toEqual(Error('CPF Inválido'));
      }
    });
  });

  it('should not be able to validate an invalid CPF', () => {
    try {
      const invalidCpf = '123.456.789-99';
      new Cpf(invalidCpf);
    } catch (error) {
      expect(error).toEqual(Error('CPF Inválido'));
    }
  }); 
});
