// import { useState } from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary'
import { ThemeProvider, useTheme } from './state/ThemeContext';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './state/AuthContext';
import Login from './pages/Login';
import OAuthCallback from './pages/OAuthCallback';
// import reactLogo from './assets/react.svg'

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


// import viteLogo from '/vite.svg'
import './App.css'
const ChildComponent = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  // throw new Error("Oops! An error occured!");
  return (
    <div style={{ background: isDarkMode ? "#333" : "#FFF", color: isDarkMode ? "#FFF" : "#000" }}>
      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <AuthProvider>
        <Router>
          <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
          </nav>
          <Routes>
            <Route path="/" element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/callback" element={<OAuthCallback />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
};

const fallbackRender = ({ error, resetErrorBoundary }) => {
  // resetErrorBoundary();
  return (
    <div role="alert">
      <p>Something went wrong!</p>
      <pre style={{color: "red"}}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Reset</button>
    </div>
  )
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <ErrorBoundary fallbackRender={fallbackRender}>
        <ChildComponent />
      </ErrorBoundary>
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
