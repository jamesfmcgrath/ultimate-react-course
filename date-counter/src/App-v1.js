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
  // const [date, setDate] = useState(new Date());
  const date = new Date();
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(1);

  function handleStepsPlus() {
    setSteps(steps + 1);
  }

  function handleStepsMinus() {
    setSteps(steps - 1);
  }

  function handlePlus() {
    setCount(count + steps)
    handleDateChange(steps);
  }

  function handleMinus() {
    setCount(count - steps)
    handleDateChange(-steps);
  }

  function handleDateChange(newCount) {
    date.setDate(date.getDate() + newCount);
  }

  return (
    <div className='counter'>
      <div className="steps">
        <button onClick={handleStepsMinus}>-</button>
        <div className="count">Steps: {steps}</div>
        <button onClick={handleStepsPlus}>+</button>
      </div>
      <div className='count'>
        <button onClick={handleMinus}>-</button>
        <div className="count"><input type="number" value={count} onChange={(e) => setCount(e.target.value)} /></div>
        <div className="count">Count: {count}</div>
        <button onClick={handlePlus}>+</button>
      </div>
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