import { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <h1>Date Counter</h1>
      <Counter />
    </div>
  );
}

function Counter() {
  const [date, setDate] = useState(new Date());
  const [count, setCount] = useState(0);

  function handlePlus() {
    setCount(count + 1)
    handleDateChange(1);
  }

  function handleMinus() {
    setCount(count - 1)
    handleDateChange(-1);
  }

  // TO DO
  function handleDateChange(newCount) {
    setDate(new Date(date.getTime() + newCount * 24 * 60 * 60 * 1000));
  }

  return (
    <div className='counter'>
      <button onClick={handleMinus}>-</button>
      <div className="count">Count: {count}</div>
      <button onClick={handlePlus}>+</button>
      <div className="date">
        {
          count > 0 ? `${count} days from today is ${date.toLocaleDateString()}` : count < 0 ?
            `${count}  days from today is ${date.toLocaleDateString()}` :
            `Today is ${date.toLocaleDateString()}`
        }
      </div>
    </div>
  );
}