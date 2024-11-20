import { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <h1>Tip Calculator</h1>
      <BillInput />
      <TipSelect />
      <TipSelect />
      <BillOutput />
      <BillReset />
    </div>
  );
}

function BillInput() {
  const [bill, setBill] = useState(0);
  return (
    <div>
      How much was the bill?
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
}

function TipSelect() {
  const [tip, setTip] = useState(0);

  return (
    <div>
      How did you like the service?
      <select value={tip} onChange={(e) => setTip(e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was OK (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">It was excellent (20%)</option>
      </select>
    </div>
  );
}

function BillOutput() {
  return (
    <div>
      <p>You pay $100 ($80 + $12 tip)</p>
    </div>
  );
}

function BillReset() {
  return (
    <div>
      <button>Reset</button>
    </div>
  );
}
