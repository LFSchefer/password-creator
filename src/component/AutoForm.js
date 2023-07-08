import * as React from "react"
import "./InputForm.css"
import { Result } from "./Result"


function AutoForm(props) {

  const [randomWord, setRandomWord] = React.useState()
  const [password, setPassword] = React.useState({value: "", ready: false})
  const [isCopyed, setIsCopied] = React.useState(false)
  const [inputForm, setInputForm] = React.useState({numberOfDigits: 4, numberOfSpeChars: 2})

  const url = "https://random-word-api.herokuapp.com/word?number=2"

  React.useEffect(()=> {
    setRandomWord(()=> getRandomword(url))
  },[])

  async function getRandomword(url) {

    let response = await fetch(url);
    let data = await response.json();
    setRandomWord(data);
  }

  const autoSubmit = (event) => {
    event.preventDefault()
      const password = []
      const randomNumbers = []

      getRandomword(url);

      if (randomWord !== undefined) {


        let word1 = randomWord[0].split("")
        let word2 = randomWord[1].split("")

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
      for (let i=0; i<4; i++) {
        randomNumbers.push(Math.floor(Math.random() * 10))
      }
      password.push(randomNumbers.join(""))

      // Generate 2 special char
      const specialChars = ["!","@","#","$","%","^","&","*","(",")","_","+","-","=","[","]","{","}","?"]
      for (let i=0; i<2; i++) {
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

  const handleNumberOfDigits = (event) => {
    setInputForm(prev => {
      return {...prev, numberOfDigits: event}
    })
  }

  const handleNumberOfSpeChars = (event) => {
    setInputForm(prev => {
      return {...prev, numberOfSpeChars: event}
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
     <div className="form-container">
          <div className="input">
            <label>Number of digits :
            </label>
            <select onChange={e => handleNumberOfDigits(e.target.value)} defaultValue={inputForm.numberOfDigits}>
              <option value="2">2</option>
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
      <button className="btn-password" onClick={autoSubmit}>Create password</button>
      < Result password={password} isCopyed={isCopyed} handleClick={toClipboard}/>
    </>
  )
}

export { AutoForm };
