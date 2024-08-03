// App.js
import React from 'react';
import RollDice from './Components/RollDice';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

function App() {
  // Inline styles for centering
  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Full viewport height
    margin: 0
  };

  return (
    <div style={centerStyle}>&nbsp&nbsp&nbsp&nbsp&nbsp
      <h1>Dice Roll App using ReactJS - By Nidhi Upman</h1>
      <RollDice />
    </div>
  );
}

export default App;
