import * as React from "react"
import "./InputForm.css"

function InputForm(props) {

  const [firstWord, setfirstWord] = React.useState({value:""})
  const [secondWord, setSecondWord] = React.useState({value:""})
  const [password, setPassword] = React.useState(["first", "second", 0,0,0,0, false])


  const handleSubmit = (event) => {
    event.preventDefault()
    const randomNumber = Math.floor(Math.random() * 10)
    if (firstWord.value !== "" && secondWord.value !== "") {
      setPassword([
        firstWord.value,
        secondWord.value,
        randomNumber,
        true
      ]
      )
    }
  }
  console.log(firstWord.value !== "" && secondWord.value !== "")
  // console.log(password.pop())

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
      <form onClick={handleSubmit}>
        <div className="form-container">
        <div className="first-input">
          <label>
            First word:
            <input type="text" name="first-word" value={firstWord.value} onChange={e => handleFirstWord(e.target.value)} />
          </label>
        </div>
        <div className="second-input">
          <label>
            Second word:
            <input type="text" name="second-word" value={secondWord.value} onChange={e => handleSecondWord(e.target.value)} />
          </label>
        </div>
        <input type="submit" value="generate password"/>
        </div>
      </form>
      {password.pop() && <div className="password">teste</div>}
    </>
  )
}

export default InputForm
