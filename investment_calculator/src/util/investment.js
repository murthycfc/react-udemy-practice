
export function calculateInvestResults({
    initialInvestment,
    annualInvestment,
    expectedReturns,
    duration
}){
    const annualData = [];
    let investmentValue =  initialInvestment;

    for(let i=0; i<duration; i++){
        const interestEarnedInYear = investmentValue * (expectedReturns/100);
        investmentValue+= interestEarnedInYear + annualInvestment;
        annualData.push({
            year: i+1,
            interest : interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment
        });
    }
    return annualData;
}

// export const formatter = new 