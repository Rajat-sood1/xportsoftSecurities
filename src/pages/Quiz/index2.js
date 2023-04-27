import { useState } from 'react';
import Header from '../../layout/header';

const questions = [
    {
        id: 1,
        text: 'What is the capital of France?',
        options: ['Paris', 'Rome', 'Madrid', 'Berlin'],
        answer: 'Paris',
    },
    {
        id: 2,
        text: 'What is the largest country in the world?',
        options: ['USA', 'Russia', 'China', 'India'],
        answer: 'Russia',
    },
    {
        id: 3,
        text: 'What is the currency of Japan?',
        options: ['Euro', 'Dollar', 'Pound', 'Yen'],
        answer: 'Yen',
    },
    {
        id: 4,
        text: 'Who discovered penicillin?',
        options: ['Albert Einstein', 'Alexander Fleming', 'Isaac Newton', 'Thomas Edison'],
        answer: 'Alexander Fleming',
    },
];

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleAnswerSelect = (answer) => {
        setAnswers({
            ...answers,
            [questions[currentQuestionIndex].id]: answer,
        });
    };

    const handleNextClick = () => {
        if (currentQuestionIndex < questions.length - 1) {
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
        for (const [questionId, selectedAnswer] of Object.entries(answers)) {
            const question = questions.find((q) => q.id.toString() === questionId);
            if (question.answer === selectedAnswer) {
                score++;
            }
        }
        return score;
    };

    const renderQuiz = () => {
        const question = questions[currentQuestionIndex];
        return (
            <div>
                <Header />
                <div className=''>
                <h2>Question {question.id}</h2>
                <p>{question.text}</p>
                <ul>
                    {question.options.map((option, index) => (
                        <li key={index}>
                            <label>
                                <input
                                    type="radio"
                                    name={`question-${question.id}`}
                                    value={option}
                                    checked={answers[question.id] === option}
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
                <p>You scored {score} out of {questions.length}.</p>
                <ul>
                    {questions.map((question) => (
                        <li key={question.id}>
                            {question.text} - Correct answer: {question.answer}, Your answer: {answers[question.id]}
                        </li>
                    ))}
                </ul>
                <button onClick={handleRestartClick}>Restart</button>
            </div>
        );
    };

    return (
        <div>

            {showResults ? renderResults() : renderQuiz()}
        </div>
    );
};
export default Quiz;