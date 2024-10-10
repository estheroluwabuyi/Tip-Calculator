import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [option1, setOption1] = useState(0);
  const [option2, setOption2] = useState(0);

  const tip = bill * ((option1 + option2) / 2 / 100);

  function handleReset() {
    setBill("");
    setOption1(0);
    setOption2(0);
  }

  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage option={option1} setOption={setOption1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage option={option2} setOption={setOption2}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} setBill={setBill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />
    </div>
  );
}

function SelectPercentage({ children, option, setOption }) {
  return (
    <div>
      <label>{children}</label>
      <select value={option} onChange={(e) => setOption(+e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, setBill, tip }) {
  return (
    <h3>
      You pay ${bill + tip}(${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
