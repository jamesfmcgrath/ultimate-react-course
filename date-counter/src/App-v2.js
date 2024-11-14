import { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <h1>Date Counter</h1>
      <Counter />
    </div>
  );
}

// TODO: Add a input field to set the steps value
// TODO: Add a reset button to reset the count to 0
// TODO: Convert steps to a HTML slider input


function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className='counter'>
      <div className="steps">
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <div className="count">Steps: {step}</div>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div className='count'>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <div className="count">Count: {count}</div>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div className="date">
        {count === 0 ? `Today is ${date.toLocaleDateString()}` : count > 0 ? `${count} days from today is ${date.toLocaleDateString()}` : `${count} days before today is ${date.toLocaleDateString()}`}
      </div>
    </div>
  );
}