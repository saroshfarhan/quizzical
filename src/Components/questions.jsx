import React from 'react';
import '../Static/questions.css'
import { decode } from 'html-entities';

export default function Questions(props){

    const options = [...props.data.incorrect_answers, props.data.correct_answer]

    const renderOptions = options.map((option, index) => <p key={index} value={option} className='option-text' onClick={()=>props.onOptionClick(option,index)}>{decode(option)}</p>)
   
    return (
        <div>
            <h1 className='question'>{decode(props.data.question)}</h1>
            <div className='options'>
                {renderOptions}
            </div>
            <hr/>
        </div>
    )
}