
export default function UserInput({onchange , userInputValue}) {

  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial">INITIAL INVESTMENT</label>
          <input type="number" id="initial" required value={userInputValue.initialValue} onChange={(event)=>onchange('initialValue',event.target.value)} />
        </div>
        <div>
        <label htmlFor="annual">ANNUAL INVESTMENT</label>
          <input type="number" id="annual" required value={userInputValue.annualValue} onChange={(event)=>onchange('annualValue',event.target.value)}/>
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expected">EXPECTED RETURN</label>
          <input type="number" id="expected" required value={userInputValue.expectedValue} onChange={(event)=>onchange('expectedValue',event.target.value)}/>
        </div>
        <div>
        <label htmlFor="duration">DURATION</label>
          <input type="number" id="duration" required value={userInputValue.durationValue} onChange={(event)=>onchange('durationValue',event.target.value)} />
        </div>
      </div>
    </section>
  );
}
