import React from 'react';

const Quiz = ({ Questions, answers, handleAnswerSelect, handleNextClick, currentQuestionIndex, next }) => {
     const Question = Questions[currentQuestionIndex];
     return (
          <div>
               <p>{Question.text}</p>
               <ul>
                    {Question.options.map((option, index) => (
                         <li key={index} className='radio'>
                              <label>
                                   <input
                                        type="radio"
                                        name={`Question-${Question.id}`}
                                        value={option}
                                        checked={answers[Question.id] === option}
                                        onChange={() => handleAnswerSelect(option)}
                                        className='radio'
                                        placeholder='data'
                                   />
                                   <span>{String.fromCharCode(65 + index)} :  {option}</span>
                              </label>
                         </li>
                    ))}
               </ul>
               <div className='q-next'>
                    {next ? currentQuestionIndex === 3 ? <button className='btn' onClick={handleNextClick}>Submit</button> : <button className='btn' onClick={handleNextClick}>Next</button> : ""}
               </div>
          </div>
     );
};

export default Quiz;