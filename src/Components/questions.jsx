import React from 'react';
import '../Static/questions.css'

export default function Questions(props){
   
    return (
        <div>
            <h1 className='question'>{props.data.question}</h1>
            <div className='options'>
                <p className='option-text'>{props.data.incorrect_answers[0]}</p>
                <p className='option-text'>{props.data.incorrect_answers[1]}</p>
                <p className='option-text'>{props.data.correct_answer}</p>
                <p className='option-text'>{props.data.incorrect_answers[2]}</p>
            </div>
            <hr/>
        </div>
    )
}