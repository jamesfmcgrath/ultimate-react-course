import { useState } from 'react';

// TO DO
// Move state up
// Use children in Tip for text
// handleCalcBill
// handleResetcd

export default function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipAmount1, setTipAmount1] = useState(0);
  const [tipAmount2, setTipAmount2] = useState(0);

  const tipPercent = (tipAmount1 + tipAmount2) / 2;
  const tipAmount = billAmount * (tipPercent / 100);

  function handleReset() {
    setBillAmount(0);
    setTipAmount1(0);
    setTipAmount2(0);
  }

  return (
    <div className="App">
      <h1>Tip Calculator</h1>
      <Bill
        billAmount={billAmount}
        setBillAmount={setBillAmount}
      />
      <Tip
        tipAmount={tipAmount1}
        setTipAmount={setTipAmount1}
      >
        <span>How did you like the service?</span>
      </Tip>
      <Tip
        tipAmount={tipAmount2}
        setTipAmount={setTipAmount2}
      >
        <span>How did your friend like the service?</span>
      </Tip>
      <Total
        billAmount={billAmount}
        tipAmount={tipAmount}
      />
      <ResetButton onReset={handleReset} />
    </div>
  );
}

function Bill({ billAmount, setBillAmount }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        value={billAmount}
        onChange={(e) => setBillAmount(Number(e.target.value))}
      />
    </div>
  );
}

function Tip({ tipAmount, setTipAmount, children }) {
  return (
    <div>
      {children}
      <select
        value={tipAmount}
        onChange={(e) => setTipAmount(Number(e.target.value))}
      >
        <option value="0">Dissatisfied 0%</option>
        <option value="5">Good 5%</option>
        <option value="10">Great 10%</option>
        <option value="20">Awesome 20%</option>
      </select>
    </div>
  );
}

function Total({ billAmount, tipAmount }) {
  return (
    <h2>
      You pay ${billAmount + tipAmount} (${billAmount} + ${tipAmount} tip)
    </h2>
  );
}

function ResetButton({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
