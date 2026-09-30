import { calculateInvestResults } from "../util/investment";

export default function Results({userInput}){

    const resultData = calculateInvestResults(userInput);
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;
    console.log(userInput);
    return(
        <div className="container p-4 text-center">
            <table className="table table-striped table-hover table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Year</th>
                        <th>Investment value</th>
                        <th>Interest (yearly)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {resultData.map(yearData => {
                        const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                        const totalInvestedAmount = yearData.valueEndOfYear - totalInterest;
                        return(
                            <tr key={yearData.year}>
                                <td>{yearData.year}</td>
                                <td>₹ {yearData.valueEndOfYear.toFixed(2)}</td>
                                <td>₹ {yearData.interest.toFixed(2)}</td>
                                <td>₹ {totalInterest.toFixed(2)}</td>
                                <td>₹ {totalInvestedAmount.toFixed(2)}</td>

                            </tr>
                        )
                    })}
                </tbody>
                
            </table>
        </div>
    )
}