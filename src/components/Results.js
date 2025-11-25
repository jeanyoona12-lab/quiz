import React from 'react'

const Results = ({onReStart}) => {
    return (
    <div id="result">
        <p>퀴즈 종료</p>
        <div 
        className='btn'
        onClick={onReStart}>다시 시작</div>
    </div>
    )
}

export default Results