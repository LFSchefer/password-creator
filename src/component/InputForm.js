import * as React from "react"
import "./InputForm.css"
import { Result } from "./Result"


function InputForm(props) {

  const [password, setPassword] = React.useState({value: "", ready: false})
  const [isCopyed, setIsCopied] = React.useState(false)
  const [inputForm, setInputForm] = React.useState({
    firstWord: "",
    secondWord: "",
    numberOfDigits: 4,
    numberOfSpeChars: 2,
  })


  const handleSubmit = (event) => {
    event.preventDefault()
    if (inputForm.firstWord !== "" && inputForm.secondWord !== "") {
      const password = []
      const randomNumbers = []
      let word1 = inputForm.firstWord.split("")
      let word2 = inputForm.secondWord.split("")

      // Capitalize random letter
      const randomIndex1 = Math.floor(Math.random() * word1.length)
      word1[randomIndex1] = word1[randomIndex1].toString().toUpperCase()
      word1 = word1.join("")
      password.push(word1)

      const randomIndex2 = Math.floor(Math.random() * word2.length)
      word2[randomIndex2] = word2[randomIndex2].toString().toUpperCase()
      word2 = word2.join("")
      password.push(word2)

      //Generate random numbers
      for (let i=0; i<inputForm.numberOfDigits; i++) {
        randomNumbers.push(Math.floor(Math.random() * 10))
      }
      password.push(randomNumbers.join(""))

      // Generate special char
      const specialChars = ["!","@","#","$","%","^","&","*","(",")","_","+","-","=","[","]","{","}","?"]
      for (let y=0; y<inputForm.numberOfSpeChars; y++) {
        const randomIndexChar = Math.floor(Math.random() * specialChars.length)
        password.push(specialChars[randomIndexChar])
      }

      //Shuffle password array
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
      shuffleArray(password)

      setPassword({value: password.join(""), ready:true})
      setIsCopied(false)

    }
  }

  const handleFirstWord = (event) => {
    setInputForm( prev => {
      return {...prev,
        firstWord: event.toLowerCase()}
      })
  }
  const handleSecondWord = (event) => {
    setInputForm( prev => {
      return {...prev,
        secondWord: event.toLowerCase()}
      })
  }
  const handleNumberOfDigits = (event) => {
    setInputForm(prev => {
      return {...prev,
      numberOfDigits: event}
    })
  }
  const handleNumberOfSpeChars = (event) => {
    setInputForm(prev => {
      return {...prev,
      numberOfSpeChars: event}
    })
  }

  const toClipboard = () => {
    let text = document.getElementById('final').innerText;

    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true)
    },() => {
      console.error('Failed to copy');
      alert("Something went wrong please try again later")
    });

  }


  return (
    <>
      <form >
        <div className="form-container">
        <div className="input">
          <label>
            First word :
          </label>
          <input type="text" name="first-word" placeholder="chocolat" value={inputForm.firstWord} onChange={e => handleFirstWord(e.target.value)} />
        </div>
        <div className="input">
          <label>
            Second word :
          </label>
          <input type="text" name="second-word" placeholder="noir" value={inputForm.secondWord} onChange={e => handleSecondWord(e.target.value)} />
        </div>
        </div>
        <div className="form-container">
          <div className="input">
            <label>Number of digits :
            </label>
            <select onChange={e => handleNumberOfDigits(e.target.value)} defaultValue={inputForm.numberOfDigits}>
              <option data-testid="nDigits" value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div className="input">
            <label>Number of special characters :
            </label>
            <select onChange={e => handleNumberOfSpeChars(e.target.value)} defaultValue={inputForm.numberOfSpeChars}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
      </form>
      <button className="btn-password" onClick={handleSubmit}>Create password</button>
      < Result password={password} isCopyed={isCopyed} handleClick={toClipboard}/>
    </>
  )
}

export { InputForm };
