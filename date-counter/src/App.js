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

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className='counter'>
      <div className="steps">
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        Steps: {step}
      </div>
      <div className='count'>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <div className="count">
          <input type="number" value={count} onChange={(e) => setCount(Number(e.target.value))} />
        </div>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div className="date">
        {count === 0 ? `Today is ${date.toDateString()}` : count > 0 ? `${count} days from today is ${date.toDateString()}` : `${count} days before today is ${date.toDateString()}`}
      </div>
      {count !== 0 || step !== 1 ? (
        <div className='reset'>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}