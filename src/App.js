import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Questions from './Components/questions';
import Intro from './Components/intro';



function App() {

  const [start, setStart] = useState(false)

  function handleStartClick(){
    setStart(true)
  }

  function clickReset(){
    setStart(prevstate => !prevstate)
  }


  return (
    <div className='main'>
      { !start ? <Intro handleClick={handleStartClick} /> : 
        <>
          <Navbar clickReset={clickReset}/>
            <main className='container'>
              <Questions />
            </main>
        </>
      }
      
    </div>
   
  );
}

export default App;
