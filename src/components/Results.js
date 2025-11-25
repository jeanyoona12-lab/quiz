import React from 'react'

const Results = ({onReStart,score}) => {
    return (
    <div id="result">
        <p>퀴즈 종료</p>
        <p className="result-score">{score} 점</p>
        <div 
        className='btn'
        onClick={onReStart}>다시 시작</div>
    </div>
    )
}

export default Results