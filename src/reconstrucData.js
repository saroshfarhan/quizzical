import { nanoid } from "nanoid"

export default function reconstruct(data) {
    
    let reconstructData = new Array(data.length)
    for (let i = 0; i < data.length; i++) {
            
            let correctAnswer = data[i].correct_answer

            let incorrectAnswers = []
            for (let j = 0; j < data[i].incorrect_answers.length; j++){
                incorrectAnswers.push(data[i].incorrect_answers[j])
            }
            
            reconstructData[i] = {
                key: nanoid(),
                id: nanoid(),
                question: data[i].question,
                correct: data[i].correct_answer,
                selected: false,
                answers: shuffle([correctAnswer, ...incorrectAnswers])
            }
    }
    return reconstructData   
}

function shuffle(arr) {
    return arr.sort((a, b, c, d) => 0.5 - Math.random())
}