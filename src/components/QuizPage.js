import React, { useState } from 'react'

const QuizPage = ({quizes,onFinish,onScore}) => {
    const [current,setCurrent] = useState(0);
    const handleClick = (idx)=>{
        //정답 체크
        if(idx+1 === quizes[current].correct){
            //점수를 +20
            onScore();
        }
        if( current+1 < quizes.length){
        setCurrent(current+1);
        } else{
            onFinish(true);
        }
    }
    return (
    <div id="quiz-page" >
        <p className='question'>{quizes[current].question}   <span>({current+1}/{quizes.length})</span></p>
        <ul className='choices'>
            {
                quizes[current].choices.map((item,idx)=>{
                    return (
                        <li key={idx}
                        onClick={()=>{handleClick(idx)}}
                        >{idx+1}.{item}</li>
                    )
                })
            }
        </ul>
    </div>
    )
}

export default QuizPage