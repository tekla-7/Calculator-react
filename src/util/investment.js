
export function calculateInvestmentResults({
  initialValue,
  annualValue,
  expectedValue,
  durationValue,
}) {
  const annualData = [];
  let investmentValue = initialValue;

  for (let i = 0; i < durationValue; i++) {
    const interestEarnedInYear = investmentValue * (expectedValue / 100);
    investmentValue += interestEarnedInYear + annualValue;
    annualData.push({
      year: i + 1, 
      interest: interestEarnedInYear, 
      valueEndOfYear: investmentValue, 
      annualValue: annualValue, 
    });
  }

  return annualData;
}


export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
