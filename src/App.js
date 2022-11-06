import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Questions from './Components/questions';
import Intro from './Components/intro';
import reconstruct from './reconstrucData';



function App() {

  const [start, setStart] = useState(false)
  const [questions, setQuestions] = useState([])
  // const [count, setCount] = React.useState(0)
  const [check, setCheck] = React.useState(false)
  const [checkString, setCheckString] = React.useState({score:"Score", showScore:false})
  

  useEffect(() => {
      fetch('https://opentdb.com/api.php?amount=5&category=31&difficulty=easy&type=multiple')
        .then(res => res.json())
        .then(quizData => { 
          const reconstructedData = reconstruct(quizData.results)
          setQuestions(reconstructedData)
        })
  },[start])


  function handleStartClick(){
    setStart(true)
  }

  function clickReset(){
    setQuestions([])
    setStart(false)
    // setCount(0)
    setCheck(false)
    setCheckString("Score")
  }


  function holdAnswer(ans) {
    setQuestions(oldQuizData => oldQuizData.map(data => {
        return data.answers.includes(ans) ?
        {...data,
        selected: ans} :
        data
    }))
    // counter()
}

// function counter() {
//   let selectedValues = questions.map(data => {
//       return data.selected
//   })
//   let newCount = selectedValues.filter(value => value !== false).length + 1
//   setCount(newCount)
// }

function checkAnsers(count, start){
  setCheck(true)
  let correctAnswers = 0
  for (let i = 0; i < questions.length; i++) {
      if (questions[i].correct === questions[i].selected) {
          correctAnswers++
      }
  }
  setCheckString({score:correctAnswers+ "/"+ questions.length, showScore:true})
  
}

  const renderQuestions = questions.map((question) => {
    return(
      <Questions 
        key={question.key}
        id={question.id}
        question={question.question}
        correct={question.correct}
        answers={question.answers}
        selected={question.selected}
        holdAnswer={holdAnswer}
        check={check}
      />
    )  
    }
  )


  return (
    <div className='main'>
      { !start ? <Intro handleClick={handleStartClick} /> : 
        <>
          <Navbar />
            <main className='container'>
              {renderQuestions}
              <div className='button-div'>
                { !checkString.showScore ? 
                    <button type='button' className='check-answer-button' onClick={checkAnsers}>Check answers</button>
                    :
                    <>
                      <p className='score-text'>You scored {checkString.score} correct answers</p>
                      <button type='button' className='check-answer-button' onClick={clickReset}>Play again</button>
                    </>
                } 
              </div>
            </main>
        </>
      }
      
    </div>
   
  );
}

export default App;
