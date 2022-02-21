const FACTOR_DIGIT_1 = 10;
const FACTOR_DIGIT_2 = 11;

exports.validate = function (cpf: string) {
	if(!cpf) return false;
	cpf = cleanCpf(cpf);
	if(!isValidLength(cpf)) return false;
	if (hasALlDigitsEqual(cpf)) return false;

	const firstDigitChecker = calculateCheckDigit(cpf, FACTOR_DIGIT_1);
	const secondDigitChecker = calculateCheckDigit(cpf, FACTOR_DIGIT_2);

	let calculatedDigit = extractCheckDigits(cpf);
	const checkDigits =  `${firstDigitChecker}${secondDigitChecker}`;  
	return calculatedDigit == checkDigits;
};

function cleanCpf(cpf: string) {
	return cpf.replace(/[\.\-]/g, '').trim();
};

function isValidLength(cpf: string) {
	return cpf.length === 11;
};

function hasALlDigitsEqual(cpf: string) {
	const firstDigit = cpf[0];
	return [...cpf].every(digit => digit === firstDigit);
};

function calculateCheckDigit(cpf: string, factor: number) {
	let totalSumDigits = 0;
	for(const digit of cpf) {
		if(factor > 1) totalSumDigits += parseInt(digit) * factor--;
	}
	const rest = totalSumDigits%11;
	return (rest < 2) ? 0 : (11 - rest);
};

function extractCheckDigits(cpf: string) {
	return cpf.slice(-2);
};
