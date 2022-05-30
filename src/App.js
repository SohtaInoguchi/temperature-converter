import logo from './logo.svg';
import './App.css';
import Converter from './component/Converter';
import { useState, createContext } from 'react';
import { Switch, FormControlLabel } from '@mui/material';

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
          <FormControlLabel 
          control={<Switch id='toggle-switch' size='large' onChange={() => toggleTheme()}/>} 
          label={theme === 'light' ? 'Light mode' : 'Dark mode'}
          id='toggle-switch-label'
          />
          <Converter/>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
