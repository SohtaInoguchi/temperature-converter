import logo from './logo.svg';
import './App.css';
import Converter from './component/Converter';
import { useState, createContext } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(cur => cur === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <div id={theme}>
           <button onClick={toggleTheme} id='toggle-button'>Toggle mode</button>
          <Converter/>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
