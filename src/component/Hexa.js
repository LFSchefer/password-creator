import * as React from "react";
import "./Hexa.css";
import { Result } from "./Result";

function Hexa(props) {

  const [password, setPassword] = React.useState({value: "", ready: false})
  const [isCopyed, setIsCopied] = React.useState(false)
  const [numberOfChars, setNumbersOfChars] =React.useState(12)

  const generatePassword = () => {
      let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let passwordLength = numberOfChars;
      let password = "";
   for (let i = 0; i < passwordLength; i++) {
     let randomNumber = Math.floor(Math.random() * chars.length);
     password += chars.substring(randomNumber, randomNumber +1);
    }
      setPassword({value: password, ready: true});
      setIsCopied(false)
  }

  const handlechange = (event) => {
    setNumbersOfChars(event)
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
      <form>
        <div className="form-container input">
          <label>
            Number of characters :
          </label>
          <input type="text" name="second-word" className="hexa-form" value={numberOfChars} onChange={e => handlechange(e.target.value)} />
        </div>
      </form>
      <button className="btn-password" onClick={generatePassword}>Create password</button>
      < Result password={password} isCopyed={isCopyed} handleClick={toClipboard}/>
    </>
  )
}

export {Hexa};
