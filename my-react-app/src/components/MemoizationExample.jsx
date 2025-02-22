import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ incrementCount }) => {
  console.log("Child component called in memoization demo")
  return(
    <button onClick={incrementCount}>Increment count</button>
  )
});

const MemoizationExample = () => {
  const [ count, setCount ] = useState(0);
  const [ text, setText ] = useState("");

  const incrementCount = useCallback(() => { setCount((prevCount) => prevCount + 1)}, []);

  return (
    <div>
      <h3>Memoization demo</h3>
      <ChildComponent incrementCount={incrementCount} />

      <p>Count: {count}</p>

      <input
        type="text"
        value={text}
        onChange={(e) => { setText(e.target.value)}}
        placeholder="Enter text here..."
      />
    </div>
  )
};

export default MemoizationExample;
