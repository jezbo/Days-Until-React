import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header/Header'
import ResultsList from './Components/Results/ResultsList'; 

function App() {

  //list visibilility managed by state boolean
  const [listIsActive, setListIsActive] = useState(false);

  //button click toggles list state 
  const onClick = () => {
    setListIsActive( !listIsActive );
  }

  /* -----JSX----- */
  return (
    <div className="App">
      
      <Header/>

      <ResultsList listIsActive={listIsActive} />

      <button onClick={onClick}>Show Days Until</button>

    </div>
  );
}

export default App;
