import { useContext, useState } from 'react';
import Quiz from '../../components/Quiz/Quiz';
import Results from '../../components/Result/Result';
import { Context } from '../../middleware/auth';
import { useParams } from 'react-router-dom';

const QuizView = () => {
    const { id } = useParams();
    const { loggedInUser, toaster } = useContext(Context);
    const Questions = loggedInUser.sub[id - 1].quiz;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [showNext, setShowNext] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerSelect = (answer) => {
        setAnswers({
            ...answers,
            [Questions[currentQuestionIndex].id]: answer,
        });
        setShowNext(true)
    };

    const handleNextClick = () => {
        let marks = 0;
        if (currentQuestionIndex < Questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            for (const [QuestionId, selectedAnswer] of Object.entries(answers)) {
                const Question = Questions.find((q) => q.id.toString() === QuestionId);
                if (Question.answer === selectedAnswer) {
                    marks++;
                }
            };
            setShowResults(true);
            (
                marks >= 2
                    ?
                    toaster(false, ' Congratulations! You have unlocked your next module.')
                    :
                    toaster(true, 'Oops! 50% or above are mandatory to unlock next module.')
            )
            loggedInUser.sub[id - 1].Marks = marks;
            setScore(marks);
        }
        setShowNext(false)
    };

    const handleRestartClick = () => {
        setCurrentQuestionIndex(0);
        setAnswers({});
        setShowResults(false);
    };

    return (
        <div className="comp-container">
            <div className="comp-title">
                <h1>Quiz</h1>
            </div>
            <section className="module-sec quiz">
                <div className="comp-title">
                    <p className='q-no'>Q{currentQuestionIndex + 1} of :{Questions.length}</p>
                </div>
                <div className='quiz-container'>

                    {
                        showResults
                            ?
                            <Results score={score} handleRestartClick={handleRestartClick} />
                            :
                            <Quiz Questions={Questions} answers={answers} handleAnswerSelect={handleAnswerSelect} handleNextClick={handleNextClick} currentQuestionIndex={currentQuestionIndex} next={showNext} />
                    }

                </div>
            </section>
        </div>
    )
};
export default QuizView;