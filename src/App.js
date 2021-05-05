import './App.css';
import React from 'react';
import HelloCGU from './Quiz4/cgu_hello';
import multiButton from './Quiz4/cgu_multiButton';

function App() {
  return (
    <div className="App">
    <div>
    {HelloCGU()}
    </div>
    <div>
    {multiButton(10)}
    </div>
    </div>
  );
}
export default App;
