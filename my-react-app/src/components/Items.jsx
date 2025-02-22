import { useState, useEffect } from 'react';
import { useErrorBoundary } from 'react-error-boundary';

const items = ["Apple", "Banana", "Cherry"];


const DisplayItems = () => {
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });
  const showBoundary = useErrorBoundary();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => {
        alert(error.message);
        showBoundary(error.message);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted!, Name: ${name}`);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleFormSubmit = ((e) => {
    e.preventDefault();
    console.log(`Form contents: ${JSON.stringify(formData)}`);
  })

  return (
    <>
      <ul>
        {items.map((item, index) => <li key={name}>{item}</li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? "Hide" : "Show"}</button>
        {isVisible && <p>Is this a paragraph</p>}
      </div>

      <div>
        <p>Count: {count}</p>
        <button key="sdfdsadsa" onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>

      <div>
        {posts && posts.slice(0, 10).map((item) => (<li key={item.id}>{item.title}</li>))}
      </div>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter first name"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter last name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email name"
        />
        <button type="submit">Submit</button>
      </form>

    </>
  );
}

export default DisplayItems;