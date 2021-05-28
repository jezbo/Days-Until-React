import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header/Header'
import dates from './Data/dates';
import ResultItem from './Functions/ResultItem'; 

function App() {
  //list visibilility managed by state boolean
  const [listIsActive, setListIsActive] = useState(false);

  //button click toggles list state 
  const onClick = () => {
    console.log('clicked!!')
    console.log('state: ' + listIsActive)
    setListIsActive( !listIsActive );
  }

  //list state affects the className and consequentially CSS 
  const listSwitch = () => {
    if(listIsActive) return 'active';
  }

  /* -----JSX----- */
  return (
    <div className="App">
      
      <Header/>

      <ul
        className={`all-results ${listSwitch()}`}
      >
        {ResultItem(dates[0])}
        {ResultItem(dates[1])}
        {ResultItem(dates[2])}
      </ul>

      <button onClick={onClick}>Show Days Until</button>
    </div>
  );
}

export default App;
