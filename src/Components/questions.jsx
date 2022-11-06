import React from 'react';
import '../Static/questions.css'
import Answer from './answers';
import { decode } from 'html-entities';

export default function Questions(props){

    const {id, question, correct, answers, selected, holdAnswer, check} = props
    

    const renderOptions = answers.map( (ans, i) => {
       return (<Answer 
            key={id + i}
            correct={correct}
            answer={ans}
            selected={selected}
            holdAnswer={holdAnswer}
            check={check}
        />)
    })

    return (
        <div>
            <h1 className='question'>{decode(question)}</h1>
            <div className='options'>
                {renderOptions}
            </div>
            <hr/>
        </div>
    )
}