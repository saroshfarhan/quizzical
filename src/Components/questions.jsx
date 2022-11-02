import React from 'react';
import quizData from '../data.json'
import '../Static/questions.css'

export default function Questions(){

    const renderQuestions = quizData.results.map((data, index) => {
        return (
            <div key={index}>
                <h1 className='question'>{data.question}</h1>
                <div className='options'>
                    <p className='option-text'>{data.incorrect_answers[0]}</p>
                    <p className='option-text'>{data.incorrect_answers[1]}</p>
                    <p className='option-text'>{data.correct_answer}</p>
                    <p className='option-text'>{data.incorrect_answers[2]}</p>
                </div>
                <hr/>
            </div>
            
        )

    })

    
   
    return (
       // <div className='main'>
       <>
            {renderQuestions}
            <br/>
            <div className='button-div'>
                <button type='button' className='check-answer-button'>Check answers</button>
            </div>
        </>
       // </div>
        
    )
}