import {calculateInvestmentResults ,formatter} from '../util/investment'
export default function Result({userInputValue}){
   const result=calculateInvestmentResults(userInputValue)
const initialInvestment=result[0].valueEndOfYear=result[0].interest-result[0].annualValue;

    return <table id='result'>
      <thead>
        <tr>
            <th>Year</th>
            <th>Investment value</th>
            <th>Interest Year</th>
            <th>Total interest</th>
            <th>invested capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((year)=>{
            const totalInterest=year.valueEndOfYear-year.annualValue*year.year-initialInvestment;
            const totalAmountInvested=year.valueEndOfYear-totalInterest
            return <tr key={year.year}>
                <td>{year.year}</td>
                <td>{formatter.format(year.valueEndOfYear)}</td>
                <td>{formatter.format(year.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
        })}
      </tbody>
    </table>
}