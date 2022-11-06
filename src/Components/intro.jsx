import React from 'react';
import '../Static/intro.css'

export default function Intro(props){
    return (
        <div className="intro">
            <div className='main-comp'>
                <h1>Quizzical</h1>
                <h3>Test your Anime knowledge</h3>
                <button type='button' onClick={props.handleClick}>Start Quiz</button>
            </div>
        </div>
    )
}

