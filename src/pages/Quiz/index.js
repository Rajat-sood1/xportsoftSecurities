import React, {  useState } from 'react'
import Header from '../../layout/header'





const Quiz = () => {

     const [answers, setAnswers] = useState({});

     const handleAnswerChange = (event) => {
          const { name, value } = event.target;
          setAnswers((prevAnswers) => ({
               ...prevAnswers,
               [name]: value,
          }));
     };
    
     return (
          <>
               <Header />
               <div className="comp-container">
                    <div className="comp-title">
                         <h1>Quiz</h1>
                    </div>
                    <section className="module-sec quiz">
                         <div className="comp-title">
                              <p className='q-no'>Q{2} of 3:</p>
                         </div>
                         <div className='quiz-container'>


                              <form>
                                   <h2>Question 1:</h2>
                                   <label>
                                        <input
                                             type="radio"
                                             name="q1"
                                             value="option1"
                                             checked={answers.q1 === 'option1'}
                                             onChange={handleAnswerChange}
                                        />
                                        Option 1
                                   </label>
                                   <label>
                                        <input
                                             type="radio"
                                             name="q1"
                                             value="option2"
                                             checked={answers.q1 === 'option2'}
                                             onChange={handleAnswerChange}
                                        />
                                        Option 2
                                   </label>
                                   <label>
                                        <input
                                             type="radio"
                                             name="q1"
                                             value="option3"
                                             checked={answers.q1 === 'option3'}
                                             onChange={handleAnswerChange}
                                        />
                                        Option 3
                                   </label>
                                   <label>
                                        <input
                                             type="radio"
                                             name="q1"
                                             value="option4"
                                             checked={answers.q1 === 'option4'}
                                             onChange={handleAnswerChange}
                                        />
                                        Option 4
                                   </label>

                                   <h2>Question 2:</h2>
                                   <label>
                                        <input
                                             type="radio"
                                             name="q2"
                                             value="option1"
                                             checked={answers.q2 === 'option1'}
                                             onChange={handleAnswerChange}
                                        />
                                        Option 1
                                   </label>
                                   <label>
                                        <input
                                             type="radio"
                                             name="q2"
                                             value="option2"
                                             checked={answers.q2 === 'option2'}
                                             onChange={handleAnswerChange}
                                        />
                                        Option 2
                                   </label>
                                   <label>
                                        <input
                                             type="radio"
                                             name="q2"
                                             value="option3"
                                             checked={answers.q2 === 'option3'}
                                             onChange={handleAnswerChange}
                                        />
                                        Option 3
                                   </label>
                                   <label>
                                        <input
                                             type="radio"
                                             name="q2"
                                             value="option4"
                                             checked={answers.q2 === 'option4'}
                                             onChange={handleAnswerChange}
                                        />
                                        Option 4
                                   </label>
                                   <input type='submit' className='btn' />
                              </form>
                         </div>
                    </section>
               </div>
          </>
     )
}

export default Quiz





