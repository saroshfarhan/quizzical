import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Questions from './Components/questions';
import Intro from './Components/intro';



function App() {

  const [start, setStart] = useState(false)
  const [questions, setQuestions] = useState([])
  
  const correctAnswer = []

  useEffect(() => {
      fetch('https://opentdb.com/api.php?amount=5&category=31&difficulty=easy&type=multiple')
        .then(res => res.json())
        .then(quizData => { setQuestions(quizData.results)})
  },[start])

  function handleStartClick(){
    setStart(true)
  }

  function clickReset(){
    setStart(prevstate => !prevstate)
  }

  function handleOptionClick(value, index){
    console.log(value)
    console.log(index)
  }

  const renderQuestions = questions.map((data, index) => 
    <Questions key={index} data={data} onOptionClick={handleOptionClick} correctAns={correctAnswer.push(data.correct_answer)} />
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
