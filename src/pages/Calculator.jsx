import React from 'react'
import  './style.css'
const Calculator=()=> {
  return (
   <div className="string-calculator-container">
      <h2>String Calculator</h2>

      <input
        type="text"
        className="string-input"
        placeholder="Enter numbers"
      />

      <button
        onClick={() => {}}
        className="string-button"
      >
        Calculate
      </button>
    </div>
  )
}

export default Calculator
