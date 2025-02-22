import { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [message, setMessage] = useState("Hello!");

  return (
    <>
      <p>{message}</p>
      <ChildComponent changeMessage={() => setMessage("Hello! Have a great day!")} />
    </>
  );
};

export default ParentComponent;