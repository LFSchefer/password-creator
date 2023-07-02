import './App.css';
import * as React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import {InputForm} from './component/InputForm';
import {AutoForm} from './component/AutoForm';
import {Hexa} from './component/Hexa'

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
      {selectBtn}
      {select === 1 && <InputForm/>}
      {select === 2 && <AutoForm/>}
      {select === 3 && <Hexa/>}
      <Footer/>
    </div>
  );
}

export default App;
