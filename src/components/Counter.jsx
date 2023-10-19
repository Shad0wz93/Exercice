import React, { useState, useEffect } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 15 && count % 15 === 0) {
      alert(`Vous avez cliqué ${count} fois!`);
    }
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter-container">
      <h1>Count</h1>
      <p>Count : {count}</p>
      <button onClick={incrementCount}>Incrémenter</button>
    </div>
  );
}

export default Counter;
