// import "./Accordian.css";
import { useState } from "react";

function Bill({ amt, onamt }) {
  return (
    <div>
      <h3>
        How much was your bill?
        <input
          type="number"
          placeHolder="Bill Value"
          value={amt}
          onChange={(e) => onamt(Number(e.target.value))}
        />
      </h3>
    </div>
  );
}

function Percentage({ yours, friends, onsetFriends, onsetYours }) {
  return (
    <div>
      <h3>
        How did you like the service?
        <select
          value={yours}
          onChange={(e) => onsetYours(Number(e.target.value))}
        >
          <option value="0">Did not like (0%)</option>
          <option value="5">Average (5%)</option>
          <option value="10">Good (10%)</option>
          <option value="20">Amazing (20%)</option>
        </select>
      </h3>
      <h3>
        How did your friend like the service?
        <select
          value={friends}
          onChange={(e) => onsetFriends(Number(e.target.value))}
        >
          <option value="0">Did not like (0%)</option>
          <option value="5">Average (5%)</option>
          <option value="10">Good (10%)</option>
          <option value="20">Amazing (20%)</option>
        </select>
      </h3>
    </div>
  );
}

export default function TipCalculator() {
  const [isOpen, setIsOpen] = useState(true);
  const [yours, setYours] = useState(0);
  const [friends, setFriends] = useState(0);
  const [amount, setAmount] = useState("");

  let total = Math.round(amount + ((yours + friends) / 2) * amount * 0.01);

  function handleReset() {
    setYours(0);
    setFriends(0);
    setAmount("");
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div>
          <Bill amt={amount} onamt={setAmount} />
          <Percentage
            yours={yours}
            friends={friends}
            onsetYours={setYours}
            onsetFriends={setFriends}
          />
          <div>
            <h1>
              Total amount is Rs.{total} (Rs.{amount} order + Rs.
              {Math.round(((yours + friends) / 2) * amount * 0.01)} tip)
            </h1>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      )}
    </>
  );
}
