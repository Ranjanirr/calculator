import logo from './logo.svg';
import './App.css';
import Button from "./button";
import Input from "./input"
import Clear from "./clear"
import React, {useState} from 'react'
import { findByLabelText } from '@testing-library/dom';
import * as math from 'mathjs'
function App() {
  const [input, changeInput] = useState("")

  function clearInput (){
    changeInput("")
  }
  function addToInput(val){
    console.log("add was called")
    changeInput(input + val)
    console.log(input)
  }
  function handleEqual(){
    changeInput(math.evaluate(input))
  }

  return (
    
    <div className="App">
      <div className = "head">
        React Calculator
      </div>
      <div className = "body">
        <div>
          <Input goesIn = {input}/>
        </div>
        <div>
          <Button onClick = {e => addToInput("7")} number = "7" color = "#E5BEED" fontColor = "#OD1530" ></Button>
          <Button onClick = {e => addToInput("8")} number = "8" color = "#E5BEED" fontColor = "#OD1530" ></Button>
          <Button onClick = {e => addToInput("9")} number = "9" color = "#E5BEED" fontColor = "#OD1530" ></Button>
          <Button onClick = {e => addToInput("/")} number = "/" color = "#7C90DB" fontColor = "#162350"></Button>

        </div>
        <div>
          <Button onClick = {() => addToInput("4")} number = "4" color = "#E5BEED" fontColor = "#OD1530"></Button>
          <Button onClick = {() => addToInput("5")} number = "5" color = "#E5BEED" fontColor = "#OD1530"></Button>
          <Button onClick = {() => addToInput("6")} number = "6" color = "#E5BEED" fontColor = "#OD1530"></Button>
          <Button onClick = {() => addToInput("*")} number = "*" color = "#7C90DB" fontColor = "#162350"></Button>
        </div>
        <div>
          <Button onClick = {() => addToInput("1")} number = "1" color = "#E5BEED"fontColor = "#OD1530"></Button>
          <Button onClick = {() => addToInput("2")} number = "2" color = "#E5BEED"fontColor = "#OD1530"></Button>
          <Button onClick = {() => addToInput("3")} number = "3" color = "#E5BEED"fontColor = "#OD1530"></Button>
          <Button onClick = {() => addToInput("+")} number = "+" color = "#7C90DB"fontColor = "#162350"></Button>
        </div>
        <div>
          <Button onClick = {() => addToInput(".")} number = {"."} color = "#E5BEED"fontColor = "#OD1530" ></Button>
          <Button onClick = {() => addToInput("0")} number = "0"  color = "#E5BEED" fontColor = "#OD1530"></Button>
          <Button onClick = {handleEqual} number = "="  color = "#E5BEED" fontColor = "#OD1530"></Button>
          <Button onClick = {() => addToInput("-")} number = "-" color = "#7C90DB" fontColor = "#162350"></Button>
        </div>
        <div>
          <Clear number = {"Clear"} onClick = {clearInput}/>
        </div>
      </div>
     
    </div>
  );
}

export default App;
