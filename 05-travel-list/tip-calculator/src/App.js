import { useState } from 'react';

// TO DO
// Move state up
// Use children in percentage for text
// handleCalcBill
// handleResetcd

export default function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);
  // const tip = bill * (tip / 100);

  function handleReset() {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div className="App">
      <h1>Tip Calculator</h1>
      <BillInput
        bill={bill}
        setBill={setBill}
      />
      <SelectPercentage
        percentage={percentage1}
        setPercentage={setPercentage1}
      >
        <span>How did you like the service?</span>
      </SelectPercentage>
      <SelectPercentage
        percentage={percentage2}
        setPercentage={setPercentage2}
      >
        <span>How did your friend like the service?</span>
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output
            tip={tip}
            bill={bill}
          />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ percentage, setPercentage, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onSelect={(e) => setPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied 0%</option>
        <option value="5">Good 5%</option>
        <option value="10">Great 10%</option>
        <option value="20">Awesome 20%</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip})
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
