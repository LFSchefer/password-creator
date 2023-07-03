import * as React from "react";
import "./Hexa.css";
import { Result } from "./Result";

function Hexa(props) {

  const [password, setPassword] = React.useState({value: "", ready: false})
  const [isCopyed, setIsCopied] = React.useState(false)

  const generatePassword = () => {
      var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var passwordLength = 12;
      var password = "";
   for (var i = 0; i <= passwordLength; i++) {
     var randomNumber = Math.floor(Math.random() * chars.length);
     password += chars.substring(randomNumber, randomNumber +1);
    }
      setPassword({value: password, ready: true});
      setIsCopied(false)
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
      <button className="btn-password" onClick={generatePassword}>Create password</button>
      < Result password={password} isCopyed={isCopyed} handleClick={toClipboard}/>
    </>
  )
}

export {Hexa};
