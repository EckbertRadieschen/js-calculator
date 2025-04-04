import { useState } from 'react'
import './App.css'
import NumberPad from "./NumberPad.jsx"
import numbers from "./assets/numbersArray.json"
import Multiply from "./MultiplyPad.jsx"
import Divide from "./DividePad.jsx"
import Add from "./AddPad.jsx"
import Subtract from "./SubtractPad.jsx"
import ClearPad from "./ClearPad.jsx"
import EqualsPad from "./EqualsPad.jsx"
import DecimalPad from "./DecimalPad.jsx"
import Display from "./Display.jsx"
import DeletePad from "./DeletePad.jsx"


function App() {

  return (
    <div id="calculator">
      <Display />
      <div id="all-pads">
        <div id="first-columns">
          <div id="first-row">
            <ClearPad />
            <DeletePad />
            <Divide />
          </div>
          <div id="calc-block">
            {numbers.numbers.map((item, index) => (
              <NumberPad key={index} id={item.id} value={item.value} className={`pad ${item.id === "zero" ? "double-width" : ""}`} />
            ))}  
            <DecimalPad />
          </div>
        </div>  
        <div id="last-column">
          <Multiply />
          <Subtract />
          <Add />
          <EqualsPad /> 
        </div>
      </div>
    </div>
  )
}

export default App
