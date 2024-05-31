import { useState } from "react"

import UserInput from "./components/UserInput"

const [userInputValue ,setUserInputValue]=useState({
  initialValue:100,
  annualValue:200,
  expectedValue:7,
  durationValue:10
})
const inputIsValid=UserInput.durationValue>=1;
function handleChange(inputName , newValue){
  setUserInputValue(preUserInput=>{
      return{
          ...preUserInput,
          [inputName]:+newValue
      }
  })
}

function App() {
  return (
    <>
    <UserInput onchange={handleChange} userInputValue={userInputValue}/>
    {!inputIsValid && <p className="center">Please enter valid data</p>}
    {inputIsValid && <Result userInputValue={userInputValue}/>}
   </>
  )
}

export default App
