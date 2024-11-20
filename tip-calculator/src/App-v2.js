import { useState } from 'react';

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);

  function handleBillChange(newBill) {
    setBill(newBill);
  }

  function handleTipChange(newTip) {
    // handle the tip from multiple select elements
    // const currentTip = Number(tip);
    // const updatedTip = Number(newTip);

    // console.log('currentTip:', currentTip);
    // console.log('updatedTip:', updatedTip);

    // if (currentTip !== updatedTip) {
    //   setTip(currentTip + updatedTip);
    // }

    // handle the tip from a single select element
    // setTip(newTip);

    // Calculate the average tip
    if (tip === 0) {
      setTip(newTip);
      return;
    }

    const currentTip = Number(tip);
    const updatedTip = Number(newTip);
    const averageTip = (currentTip + updatedTip) / 2;
    setTip(averageTip);
  }

  return (
    <div className="App">
      <h1>Tip Calculator</h1>
      <BillInput billAmount={bill} onSetBill={handleBillChange} />
      <TipSelect tipAmount={tip} onSetTip={handleTipChange}>
        How did you like the service?
      </TipSelect>
      <TipSelect tipAmount={tip} onSetTip={handleTipChange}>
        How did your friend like the service?
      </TipSelect>
      <BillOutput billAmount={bill} tipAmount={tip} />
      <BillReset />
    </div>
  );
}

function BillInput({ billAmount, onSetBill }) {
  return (
    <div>
      How much was the bill?
      <input
        type="text"
        value={billAmount}
        onChange={(e) => onSetBill(e.target.value)}
      />
    </div>
  );
}

function TipSelect({ tipAmount, onSetTip, children }) {
  return (
    <div>
      {children}
      <select value={tipAmount} onChange={(e) => onSetTip(e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was OK (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">It was excellent (20%)</option>
      </select>
    </div>
  );
}

function BillOutput({ billAmount, tipAmount }) {
  const tip = (Number(billAmount) * Number(tipAmount)) / 100;
  const billTotal = Number(billAmount) + tip;
  return (
    <div>
      <p>
        You pay ${billTotal} (${billAmount} + {tipAmount}% tip)
      </p>
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
