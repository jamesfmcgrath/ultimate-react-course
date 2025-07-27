import { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  // function handleIncreaseStep() {
  //   setStep((s) => s + 1);
  // }

  // function handleDecreaseStep() {
  //   setStep((s) => s - 1);
  // }

  function handleIncreaseCount() {
    setCount((c) => c + step);
  }

  function handleDecreaseCount() {
    setCount((c) => c - step);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={handleDecreaseCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handleIncreaseCount}>+</button>
      </div>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
      <p>
        {Math.abs(count)} {count === 0 && 'Today is '}
        {count < 0 && 'days ago from today was '}
        {count > 0 && 'days from today is '}
        {date.toDateString()}
      </p>
    </div>
  );
}
