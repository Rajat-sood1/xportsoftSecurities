import React from "react";




const Results = ({ getScore, Questions, answers, handleRestartClick, score }) => {

    return (
        <div>
            <h2>Results</h2>
            <p>You scored {score} out of {Questions.length}.</p>
            <ul>
                {Questions.map((Question) => (
                    <li key={Question.id} className="radio">
                        <p>{Question.text} - Correct answer: {Question.answer}, Your answer: {answers[Question.id]}</p>
                    </li>
                ))}
            </ul>
            <div className='q-next'>
                <button className='btn' onClick={handleRestartClick} >Restart</button>
            </div>
        </div>
    );
};

export default Results;