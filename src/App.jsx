import React, { useState } from 'react';
import './App.css';
import PasswordContent from './components/PasswordContent';
import Slider from './components/Slider';
import Checkbox from './components/Checkbox';
import StrengthIndicator from './components/StrengthIndicator';
import { generatePassword, updateStrength } from './utils/passwordUtils';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [length, setLength] = useState(0); // Initialize length state with a default value
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [copyMessage, setCopyMessage] = useState(false);

  const handleGenerate = () => {
    if (!uppercase && !lowercase && !numbers && !symbols) {
      alert('Please select at least one character type!');
      return;
    } else if (length === 0) {
      alert('Password length cannot be zero!');
      return;
    }

    const newPassword = generatePassword(length, uppercase, lowercase, numbers, symbols);
    setPassword(newPassword);
    const newStrength = updateStrength(newPassword);
    setStrength(newStrength);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopyMessage(true);
    setTimeout(() => {
      setCopyMessage(false);
    }, 2000);
  };

  return (
    <div className="App">
      <header className="header">Password Generator</header>
      <main className="container">
        <PasswordContent password={password} onCopy={handleCopy} copyMessage={copyMessage} />
        <div className="controls-content">
          <Slider length={length} setLength={setLength} />
          <div className="checkbox-container">
            <Checkbox label="Include Uppercase Letters" checked={uppercase} onChange={setUppercase} />
            <Checkbox label="Include Lowercase Letters" checked={lowercase} onChange={setLowercase} />
            <Checkbox label="Include Numbers" checked={numbers} onChange={setNumbers} />
            <Checkbox label="Include Symbols" checked={symbols} onChange={setSymbols} />
          </div>
          <StrengthIndicator strength={strength} />
          <button type="button" className="generate-button" onClick={handleGenerate}>
            GENERATE <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
