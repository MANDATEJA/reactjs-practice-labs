import { useState, useEffect } from 'react';

const WindowResize = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <h2>Window width: {windowSize}</h2>
  );
}

export default WindowResize;
