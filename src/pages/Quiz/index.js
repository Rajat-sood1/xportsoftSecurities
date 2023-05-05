import { useContext, useState } from 'react';
import Quiz from '../../components/Quiz/Quiz';
import Results from '../../components/Result/Result';
import { Context } from '../../middleware/auth';
import { useParams } from 'react-router-dom';

const QuizView = () => {
    const { id } = useParams();
    const { loggedInUser } = useContext(Context);
    const Questions = loggedInUser.sub[id - 1].quiz;


    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [showNext, setShowNext] = useState(false);

    const handleAnswerSelect = (answer) => {
        setAnswers({
            ...answers,
            [Questions[currentQuestionIndex].id]: answer,
        });
        setShowNext(true)
    };

    const handleNextClick = () => {
        if (currentQuestionIndex < Questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResults(true);
        }
        setShowNext(false)
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
        };
        loggedInUser.sub[id - 1].Marks = score;
        return score;
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
                            <Results getScore={getScore} Questions={Questions} answers={answers} handleRestartClick={handleRestartClick} />
                            :
                            <Quiz Questions={Questions} answers={answers} handleAnswerSelect={handleAnswerSelect} handleNextClick={handleNextClick} currentQuestionIndex={currentQuestionIndex} next={showNext} />
                    }

                </div>
            </section>
        </div>
    )
};
export default QuizView;