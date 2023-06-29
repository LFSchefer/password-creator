import * as React from "react"
import "./InputForm.css"

function InputForm(props) {

  const [firstWord, setfirstWord] = React.useState({value:""})
  const [secondWord, setSecondWord] = React.useState({value:""})
  const [password, setPassword] = React.useState({value: "", ready: false})


  const handleSubmit = (event) => {
    event.preventDefault()
    if (firstWord.value !== "" && secondWord.value !== "") {
      const randomNumber = Math.floor(Math.random() * 10)
      const word1 = firstWord.value
      const word2 = secondWord.value
      setPassword({value: randomNumber, ready:true})
      console.log(password)
    }
  }
  // console.log(firstWord.value !== "" && secondWord.value !== "")

  const handleFirstWord = (event) => {
    setfirstWord( prev => {
      return {...prev,
        value: event}
      })
  }
  const handleSecondWord = (event) => {
    setSecondWord( prev => {
      return {...prev,
        value: event}
      })
  }

  return (
    <>
      <form >
        <div className="form-container">
        <div className="input">
          <label>
            First word:
          </label>
          <input type="text" name="first-word" value={firstWord.value} onChange={e => handleFirstWord(e.target.value)} />
        </div>
        <div className="input">
          <label>
            Second word:
          </label>
          <input type="text" name="second-word" value={secondWord.value} onChange={e => handleSecondWord(e.target.value)} />
        </div>
        </div>
      </form>
      <button onClick={handleSubmit}>Create password</button>
      {password.ready && <div className="password"><h3>{password.value}</h3></div>}
    </>
  )
}

export default InputForm
