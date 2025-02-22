const ChildComponent = ({ changeMessage }) => {
  return (
    <button onClick={changeMessage}>Change Message</button>
  );
};

export default ChildComponent;