import React from 'react';
import '../Static/questions.css'
import { nanoid } from 'nanoid';
import { decode } from 'html-entities';


export default function Answer(props){
    const {correct, answer, selected, holdAnswer, check} = props

    let styles = {}

    function styleSetter(){
        if (check && answer === correct) {
            styles = {
                backgroundColor: "#94D7A2"
            }    
        } else if (check && answer === selected && selected !== correct) {
            styles = {
                backgroundColor: "#F8BCBC"
            }
        } else if (check && answer !== selected && answer !== correct){
            styles = {
                opacity: 0.25
            }
        } else if (answer === selected) {
            styles = {
                backgroundColor: "#4D5B9E",
                color: "#F5F7FB"
            }
        } else {
            styles = {
                backgroundColor: ""
            }
        }
        return styles
    }

    styleSetter()

    return(
        <p
            style={styles}
            className='option-text'
            key={ nanoid() }
            onClick={() => holdAnswer(answer)}
        >{decode(answer)}</p>
    )
}