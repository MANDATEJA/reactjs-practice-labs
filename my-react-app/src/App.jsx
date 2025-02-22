// import { useState } from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './state/ThemeContext';
// import reactLogo from './assets/react.svg'

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


// import viteLogo from '/vite.svg'
import './App.css'
const ChildComponent = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div style={{ background: isDarkMode ? "#333" : "#FFF", color: isDarkMode ? "#FFF" : "#000" }}>
      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

function App() {
  // const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <ChildComponent />
      {/* <div style={{ background: isDarkMode ? "#333" : "#FFF", color: isDarkMode ? "#FFF" : "#000" }}>
        <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div> */}
      {/* <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router> */}
    </ThemeProvider>
  )
}

export default App
