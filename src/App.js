import './App.css';
import * as React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import {InputForm} from './component/InputForm';
import {AutoForm} from './component/AutoForm';
import {Hexa} from './component/Hexa';
import {Intro} from "./component/Intro";
import { Instruction } from './component/Instruction';

// TODO implement select form on auto api 

function App() {

  const [select, setSelect] = React.useState(1)

  const chooseAlgo = (num) => {
    setSelect(num)
  }

  let selectBtn = <div className='select-btn'>
    <div className='btn' onClick={() => chooseAlgo(1)}>Chose your word</div>
    <div className='btn' onClick={() => chooseAlgo(2)}>Random word</div>
    <div className='btn' onClick={() => chooseAlgo(3)}>Hexadecimal</div>
  </div>

  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      {selectBtn}
      <Instruction select={select}/>
      {select === 1 && <InputForm/>}
      {select === 2 && <AutoForm/>}
      {select === 3 && <Hexa/>}
      <Footer/>
    </div>
  );
}

export default App;
