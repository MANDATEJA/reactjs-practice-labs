import { useState, useMemo } from 'react';

const calculateFibonacciNum = (number) => {
  if(number <= 1) return number;

  return calculateFibonacciNum(number -1) + calculateFibonacciNum(number - 2);
}

const DemoUseMemo = () => {
  const [ number, setNumber ] = useState(0);
  const [ count, setCount ] = useState(0);

  const fibNum = useMemo(() => calculateFibonacciNum(number), [number]);

  return (
    <div>
      <h3>Fibonacci calculator</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        placeholder='Enter a number'
      />
      <p>Fibonacci number: {fibNum}</p>

      <button onClick={() => setCount(count + 1)}>Increment count: {count}</button>
    </div>
  );
}

export default DemoUseMemo;