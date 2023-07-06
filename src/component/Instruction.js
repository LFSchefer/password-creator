import * as React from "react"
import "./Instruction.css"

function Instruction(props) {

  const word = <div className="instruction">
    <p>Please enter to word and choose how many digits and special charaters you want:</p>
  </div>

  const random = <div className="instruction">
    <p>Please choose how many digits and special charaters you want:</p>
  </div>

  const hexa = <div className="instruction">
    <p>Please choose how many characters you want:</p>
  </div>

 return (
  <div className="instruction">
    {props.select === 1 && word }
    {props.select === 2 && random }
    {props.select === 3 && hexa}
  </div>
 )
}

export {Instruction}
