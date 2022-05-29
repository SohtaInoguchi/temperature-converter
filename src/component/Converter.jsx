import React, { useState, useContext } from 'react'
import { ThemeContext } from '../App';

export default function Converter() {
    const { toggleTheme } = useContext(ThemeContext)
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
    <div id='wrapper'>
      {/* <section id='converter-form'> */}
        {
          sourceTemp === 'celsius' &&
          <button id='switch-button' 
          onClick={switchTempMode}>C &gt; F</button>
        }
        {
          sourceTemp === 'fahrenheit' &&
          <button id='switch-button' 
          onClick={switchTempMode}>F &gt; C</button>
        }
        
        {
          sourceTemp === 'celsius' &&
          <div className='temperature-input'>
            {/* <label htmlFor='celsius' >
              Celsius */}
            <input 
            inputMode='decimal'
            id='celsius' 
            name='celsius'
            value={celsius} 
            className='inputs'
            placeholder='Enter temperature in celsius' 
            onChange={(e) => setCelsius(e.target.value)}/>
            {/* </label> */}
          </div>
        }

        {
          sourceTemp === 'fahrenheit' &&
          <div className='temperature-input'>
            {/* <label htmlFor='fahrenheit'>
              Fahrenheit */}
              <input 
              inputMode='decimal'
              id='fahrenheit' 
              name='fahrenheit' 
              value={fahrenheit}
              className='inputs'
              placeholder='Enter temperature in fahrenheit' 
              onChange={(e) => setFahrenheit(e.target.value)}/>
            {/* </label> */}
          </div>
        }
        {sourceTemp === 'celsius' && 
          <div id='output'>{`Output: ${output}`} &#8451;</div>
        }
        {sourceTemp === 'fahrenheit' &&
          <div id='output'>{`Output: ${output}`} &#8457;</div>
        }
        <button onClick={convertTemperature} id='convert-button'>Convert</button>
        <button onClick={check}>check</button>
      {/* </section> */}
    </div>  
    )
}
