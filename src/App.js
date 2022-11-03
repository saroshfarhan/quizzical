import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Questions from './Components/questions';
import Intro from './Components/intro';
import quizData from './data.json'



function App() {

  const [start, setStart] = useState(false)

  function handleStartClick(){
    setStart(true)
  }

  function clickReset(){
    setStart(prevstate => !prevstate)
  }

  const renderQuestions = quizData.results.map((data, index) => 
    <Questions key={index} data={data} />
  )


  return (
    <div className='main'>
      { !start ? <Intro handleClick={handleStartClick} /> : 
        <>
          <Navbar clickReset={clickReset}/>
            <main className='container'>
              {renderQuestions}
              <div className='button-div'>
                <button type='button' className='check-answer-button'>Check answers</button>
              </div>
            </main>
        </>
      }
      
    </div>
   
  );
}

export default App;
