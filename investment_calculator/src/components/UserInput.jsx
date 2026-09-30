
export default function UserInput({userInput: userInputs, onChangeFunc: handleChange}){

    return(
        <section className=" container p-3 bg-success  text-light rounded">
            <div className="row mb-3">
                <div className="col-6">
                    <label className="form-label">Initial Investment</label>
                    <input type="number" className="form-control" required
                        value={userInputs.initialInvestment} onChange={(e)=>handleChange('initialInvestment',e.target.value)}/>
                </div>
                <div className="col-6">
                    <label className="form-label">Annual Investment</label>
                    <input type="number" className="form-control" required
                        value={userInputs.annualInvestment} onChange={(e)=>handleChange('annualInvestment',e.target.value)}/>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-6">
                    <label className="form-label">Expected Return</label>
                    <input type="number" className="form-control" required
                        value={userInputs.expectedReturns} onChange={(e)=>handleChange('expectedReturns',e.target.value)}/>
                </div>
                <div className="col-6">
                    <label className="form-label">Duration</label>
                    <input type="number" className="form-control" required
                        value={userInputs.duration} onChange={(e)=>handleChange('duration',e.target.value)}/>
                </div>
            </div>

        </section>
    )
}