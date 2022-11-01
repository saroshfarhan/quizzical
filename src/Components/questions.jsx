import React from 'react';
import quizData from '../data.json'
import '../Static/questions.css'

export default function Questions(){

    const renderQuestions = quizData.results.map(data => {
        return (
            <div>
                <h1 className='question'>{data.question}</h1>
                <div className='options'>
                    <p>{data.incorrect_answers[0]}</p>
                    <p>{data.incorrect_answers[1]}</p>
                    <p>{data.correct_answer}</p>
                    <p>{data.incorrect_answers[1]}</p>
                </div>
            </div>
        
        )

    })

    
   
    return (
        <>
            {renderQuestions}
            <br/>
        </>
        
    )
}