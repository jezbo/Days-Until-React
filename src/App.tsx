import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header/Header'
import ResultsList from './Components/Results/ResultsList'; 
import Sidebar from './Components/Sidebar/Sidebar';

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
      
      <Sidebar/>

      <div className='main-body'>

        <Header/>
        <ResultsList listIsActive={listIsActive} />
        <div className='button-container'>

          <button onClick={onClick}>Show Days Until</button>
          
        </div>

      </div>

    </div>
  );
}

export default App;
