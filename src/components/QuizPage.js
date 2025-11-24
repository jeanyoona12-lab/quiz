import React, { useState } from 'react'

const QuizPage = ({quizes,onFinish}) => {
    const [current,setCurrent] = useState(0);
    const handleClick = ()=>{
        if( current+1 < quizes.length){
        setCurrent(current+1);
        } else{
            onFinish(true);
        }
    }
    return (
    <div id="quiz-page">
        <h3>퀴즈 ({current+1}/{quizes.length})</h3>
        <p>{quizes[current].question}</p>
        <ul className='choices'>
            {
                quizes[current].choices.map((item,idx)=>{
                    return (
                        <li key={idx}
                        onClick={()=>handleClick(idx)}>{idx+1}{item}</li>
                    )
                })
            }
        </ul>
    </div>
    )
}

export default QuizPage