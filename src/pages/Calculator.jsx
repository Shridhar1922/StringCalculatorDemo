import React,{useState} from 'react'
import  './styles.css'

export const add = (numbers) => {

  if (!numbers) return 0;
  
  numbers = numbers.replace(/\\n/g, '\n');
  const delimiter = /,|\n/;
  const nums = numbers.split(delimiter).map(Number);

  return nums.reduce((sum, n) => sum + n, 0);

}
const Calculator=()=> {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  
  const handleSubmit = () => {
      try {
        const sum = add(input.trim());
        setResult(sum);
        setError("");
      } catch (err) {
        setError(err.message);
        setResult(null);
      }
   };


  return (
   <div className="string-calculator-container">
      <h2>String Calculator</h2>

      <input
        type="text"
        className="string-input"
        placeholder="Enter numbers"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="string-button"
      >
        Calculate
      </button>

      {result !== null && (
        <p className={"string-sum"}>
          Sum: {result}
        </p>
      )}

      {error && (
        <p className={"string-error"}>
           {error}
        </p>
      )}
    </div>
  )
}

export default Calculator
