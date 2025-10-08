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

  function handleIncreaseStep() {
    setStep((s) => s + 1);
  }

  function handleDecreaseStep() {
    setStep((s) => s - 1);
  }

  function handleIncreaseCount() {
    setCount((c) => c + step);
  }

  function handleDecreaseCount() {
    setCount((c) => c - step);
  }

  return (
    <div className="counter">
      <div>
        <button onClick={handleDecreaseStep}>-</button>
        <div>Steps: {step}</div>
        <button onClick={handleIncreaseStep}>+</button>
      </div>
      <div style={{ display: 'flex' }}>
        <button onClick={handleDecreaseCount}>-</button>
        <div>Count: {count}</div>
        <button onClick={handleIncreaseCount}>+</button>
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
