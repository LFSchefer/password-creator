import * as React from "react"
import "./InputForm.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'


function InputForm(props) {

  const [firstWord, setfirstWord] = React.useState({value:""})
  const [secondWord, setSecondWord] = React.useState({value:""})
  const [password, setPassword] = React.useState({value: "", ready: false})


  const handleSubmit = (event) => {
    event.preventDefault()
    if (firstWord.value !== "" && secondWord.value !== "") {
      const password = []
      const randomNumbers = []
      let word1 = firstWord.value.split("")
      let word2 = secondWord.value.split("")

      // Capitalize random letter
      const randomIndex1 = Math.floor(Math.random() * word1.length)
      word1[randomIndex1] = word1[randomIndex1].toString().toUpperCase()
      word1 = word1.join("")
      password.push(word1)

      const randomIndex2 = Math.floor(Math.random() * word2.length)
      word2[randomIndex2] = word2[randomIndex2].toString().toUpperCase()
      word2 = word2.join("")
      password.push(word2)

      //Generate 4 random numbers
      for (var i=0; i<4; i++) {
        randomNumbers.push(Math.floor(Math.random() * 10))
      }
      password.push(randomNumbers.join(""))

      // Generate 2 special char
      const specialChars = ["!","@","#","$","%","^","&","*","(",")","_","+","-","=","[","]","{","}","?"]
      for (var i=0; i<2; i++) {
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

    }
  }

  const handleFirstWord = (event) => {
    setfirstWord( prev => {
      return {...prev,
        value: event.toLowerCase()}
      })
  }
  const handleSecondWord = (event) => {
    setSecondWord( prev => {
      return {...prev,
        value: event.toLowerCase()}
      })
  }

  const toClipboard = () => {
    let text = document.getElementById('final').innerText;

    navigator.clipboard.writeText(text).then(() => {
      alert("Password copied to clipboard")
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
          <input type="text" name="first-word" value={firstWord.value} onChange={e => handleFirstWord(e.target.value)} />
        </div>
        <div className="input">
          <label>
            Second word :
          </label>
          <input type="text" name="second-word" value={secondWord.value} onChange={e => handleSecondWord(e.target.value)} />
        </div>
        </div>
      </form>
      <button className="btn-password" onClick={handleSubmit}>Create password</button>
      {password.ready && <div className="password">
        <h3 id="final">{password.value}</h3>
        <FontAwesomeIcon className="copy" icon={faCopy} size="xl" onClick={() => toClipboard()} />
        </div>}
    </>
  )
}

export { InputForm };
