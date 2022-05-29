import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [output, setOutput] = useState('');
  const [sourceTemp, setSourceTemp] = useState('celsius');

  const check = (e) => {
    e.preventDefault();
    console.log(fahrenheit);
  }

  const convertTemperature = () => {
    let targetTemp;
    if (sourceTemp === 'celsius') {
      // Formula (0°C × 9/5) + 32 = 32°F
      targetTemp = celsius * 1.8 + 32;
    }
    else {
     // Formula (32°F − 32) × 5/9 = 0°C
      targetTemp = (fahrenheit - 32) * 0.5556;
    }
    setOutput(targetTemp);
  }

  const switchTempMode = () => {
    if (sourceTemp === 'celsius') {
      setSourceTemp('fahrenheit');
    }
    else {
      setSourceTemp('celsius');
    }
    setOutput('');
  }

  return (
    <>
      <button onClick={switchTempMode}>Switch</button>
      
      {
        sourceTemp === 'celsius' &&
        <>
          <label htmlFor='celsius'>Celsius</label>
          <input 
          inputMode='decimal'
          id='celsius' 
          name='celsius' 
          value={celsius} 
          onChange={(e) => setCelsius(e.target.value)}/>
        </>
      }

      {
        sourceTemp === 'fahrenheit' &&
        <>
          <label htmlFor='fahrenheit'>Fahrenheit</label>
          <input 
          inputMode='decimal'
          id='fahrenheit' 
          name='fahrenheit' 
          value={fahrenheit} 
          onChange={(e) => setFahrenheit(e.target.value)}/>
        </>
      }


      <div id='output'>{`Output: ${output}`}</div>
      <button onClick={convertTemperature}>Convert</button>
      <button onClick={check}>check</button>
    </>
  );
}

export default App;
