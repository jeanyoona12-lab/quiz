import React from 'react'

const Results = ({onReStart}) => {
    return (
    <div id="result">
        <p>퀴즈 종료</p>
        <button onClick={onReStart}>다시 시작</button>
    </div>
    )
}

export default Results