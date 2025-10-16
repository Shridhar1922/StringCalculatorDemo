import React,{useState} from 'react'
import  './styles.css'

export const add = (numbers) => {

  if (!numbers) return 0;

  numbers = numbers.replace(/\\n/g, '\n');
  let delimiter = /,|\n/; 
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const delimiterLine = parts[0].slice(2); 
    delimiter = new RegExp(delimiterLine);   
    numbers = parts.slice(1).join("\n");     
  }
  const nums = numbers.split(delimiter).map(Number);
  const negatives = nums.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives}`);
  }

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
