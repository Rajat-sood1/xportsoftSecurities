import { useState } from 'react';
import Header from '../../layout/header';
import Questions from '../../data/Questions';

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleAnswerSelect = (answer) => {
        setAnswers({
            ...answers,
            [Questions[currentQuestionIndex].id]: answer,
        });
    };

    const handleNextClick = () => {
        if (currentQuestionIndex < Questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResults(true);
        }
    };

    const handleRestartClick = () => {
        setCurrentQuestionIndex(0);
        setAnswers({});
        setShowResults(false);
    };

    const getScore = () => {
        let score = 0;
        for (const [QuestionId, selectedAnswer] of Object.entries(answers)) {
            const Question = Questions.find((q) => q.id.toString() === QuestionId);
            if (Question.answer === selectedAnswer) {
                score++;
            }
        }
        return score;
    };

    const renderQuiz = () => {
        const Question = Questions[currentQuestionIndex];
        return (
            <div>
                <div className=''>
                    <h2>Question {Question.id}</h2>
                    <p>{Question.text}</p>
                    <ul>
                        {Question.options.map((option, index) => (
                            <li key={index}>
                                <label>
                                    <input
                                        type="radio"
                                        name={`Question-${Question.id}`}
                                        value={option}
                                        checked={answers[Question.id] === option}
                                        onChange={() => handleAnswerSelect(option)}
                                    />
                                    {option}
                                </label>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleNextClick}>Next</button>
                </div>
            </div>
        );
    };

    const renderResults = () => {
        const score = getScore();
        return (
            <div>
                <h2>Results</h2>
                <p>You scored {score} out of {Questions.length}.</p>
                <ul>
                    {Questions.map((Question) => (
                        <li key={Question.id}>
                            {Question.text} - Correct answer: {Question.answer}, Your answer: {answers[Question.id]}
                        </li>
                    ))}
                </ul>
                <button onClick={handleRestartClick}>Restart</button>
            </div>
        );
    };

    return (
        <div>
            <Header />
            <div className="comp-container">
                <div className="comp-title">
                    <h1>Quiz</h1>
                </div>
                <section className="module-sec quiz">
                    <div className="comp-title">
                        <p className='q-no'>Q{currentQuestionIndex+1} of :{Questions.length}</p>
                    </div>
                    <div className='quiz-container'>

                        {showResults ? renderResults() : renderQuiz()}

                    </div>
                </section>
            </div>
        </div>
    );
};
export default Quiz;