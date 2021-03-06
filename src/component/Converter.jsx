import React, { useState, useContext } from 'react'
import { ThemeContext } from '../App';

export default function Converter() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const [output, setOutput] = useState('');
    const [sourceTemp, setSourceTemp] = useState('celsius');

    const isNumber = (input) => {
      if (input.trim() === '') {
        return false;
      }
      return !isNaN(input);
    }      
    
    const convertTemperature = () => {
      // check if input is valid number
      const inputToBeValidated = sourceTemp === 'celsius' ? celsius : fahrenheit;
      if (!isNumber(inputToBeValidated)) {
        alert('Please enter number');
        return;
      }

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
      setCelsius('');
      setFahrenheit('');
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
    <div id='wrapper'>
      {
        sourceTemp === 'celsius' &&
        <button id='switch-button' 
        onClick={switchTempMode}>From &#8451; to &#8457;</button>
      }
      {
        sourceTemp === 'fahrenheit' &&
        <button id='switch-button' 
        onClick={switchTempMode}>From &#8457; to &#8451;</button>
      }
      
      {
        sourceTemp === 'celsius' &&
        <div className='temperature-input'>
          <input 
          inputMode='decimal'
          id='celsius' 
          name='celsius'
          value={celsius} 
          className='inputs'
          placeholder='Enter temperature in celsius' 
          onChange={(e) => setCelsius(e.target.value)}/>
        </div>
      }

      {
        sourceTemp === 'fahrenheit' &&
        <div className='temperature-input'>
          <input 
          inputMode='decimal'
          id='fahrenheit' 
          name='fahrenheit' 
          value={fahrenheit}
          className='inputs'
          placeholder='Enter temperature in fahrenheit' 
          onChange={(e) => setFahrenheit(e.target.value)}/>
        </div>
      }
      <button onClick={convertTemperature} id='convert-button'>Convert</button>
      {sourceTemp === 'celsius' && 
        <div id='output'>{`Fahrenheit: ${output}`} &#8457;</div>
      }
      {sourceTemp === 'fahrenheit' &&
        <div id='output'>{`Celsius: ${output}`} &#8451;</div>
      }
    </div>  
    )
}
