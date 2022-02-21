export default class Cpf {
  private value: string;
  private FACTOR_DIGIT_1 = 10;
  private FACTOR_DIGIT_2 = 11;

  constructor(value:string) {
    if(!this.validate(value)) throw new Error("CPF Inválido");
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  validate(cpf: string) {
    if(!cpf) return false;
    cpf = this.cleanCpf(cpf);
    if(!this.isValidLength(cpf)) return false;
    if (this.hasALlDigitsEqual(cpf)) return false;
  
    const firstDigitChecker = this.calculateCheckDigit(cpf, this.FACTOR_DIGIT_1);
    const secondDigitChecker = this.calculateCheckDigit(cpf, this.FACTOR_DIGIT_2);
  
    let calculatedDigit = this.extractCheckDigits(cpf);
    const checkDigits =  `${firstDigitChecker}${secondDigitChecker}`;  
    return calculatedDigit == checkDigits;
  }
  
  private cleanCpf(cpf: string) {
    return cpf.replace(/[\.\-]/g, '').trim();
  }
  
  private isValidLength(cpf: string) {
    return cpf.length === 11;
  }
  
  private hasALlDigitsEqual(cpf: string) {
    const firstDigit = cpf[0];
    return [...cpf].every(digit => digit === firstDigit);
  }
  
  private calculateCheckDigit(cpf: string, factor: number) {
    let totalSumDigits = 0;
    for(const digit of cpf) {
      if(factor > 1) totalSumDigits += parseInt(digit) * factor--;
    }
    const rest = totalSumDigits%11;
    return (rest < 2) ? 0 : (11 - rest);
  }
  
  private extractCheckDigits(cpf: string) {
    return cpf.slice(-2);
  } 
}
