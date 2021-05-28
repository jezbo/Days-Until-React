import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import ShowDaysButton from './Components/showDaysButton/ShowDaysButton'
import AllResults from './Components/Results/AllResults';

function App() {
  /* -----STATES----- */
  const [results, setResults] = useState([]);

  /* -----JSX----- */
  return (
    <div className="App">
      <Header/>
      <AllResults results={results} />
      <ShowDaysButton stateSetter={setResults} />
  
    </div>
  );
}

export default App;
