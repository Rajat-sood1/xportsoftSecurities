import React, { useRef, useState } from 'react'
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
     const [selectedValue, setSelectedValue] = useState("");
     const Inputelem = useRef([]);

     const handleRadioChange = (event) => {
          setSelectedValue(event.target.value);
     };

     const handleSubmit = (event) => {

          event.preventDefault();
          if (selectedValue === "checkbox1") { return alert("this is correct ans") }
          else { alert('Incorect Answer') }
          console.log("Selected Value: ", selectedValue);
     };
     // next Question
     const [selectedValue2, setSelectedValue2] = useState("");
     const Inputelem2 = useRef([]);

     const handleRadioChange2 = (event) => {

          setSelectedValue2(event.target.value);
     };

     const handleSubmit2 = (event) => {
          event.preventDefault();
          if (selectedValue2 === "checkboxes6") { return alert("this is correct ans") }
          else { alert('Incorect Answer') }
          console.log("Selected Value: ", selectedValue2);
     };
     console.log(Inputelem)

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


                              <form onSubmit={handleSubmit}>
                                   <p >What type of benefits do businesses and communities receive by hiring the service of a security personnel?</p>

                                   <input checked={selectedValue === "checkbox1"}
                                        ref={(el) => (Inputelem.current.first = el)}
                                        onChange={handleRadioChange} type="radio" id="checkbox1" name="checkboxes" value="checkbox1" />
                                   <label htmlFor="checkbox1">Job</label>
                                   <input
                                        type='text'
                                        onInput={e => console.log('success')}
                                        readOnly
                                        data-stauts='value'
                                        onClick={(e) => console.log(e.target.dataset.stauts)} />
                                   <br />

                                   <input checked={selectedValue === "checkbox2"}
                                        ref={(el) => (Inputelem.current.second = el)}
                                        onChange={handleRadioChange} type="radio" id="checkbox2" name="checkboxes2" value="checkbox2" />
                                   <label htmlFor="checkbox2">Bussiness</label>
                                   <br />

                                   <input checked={selectedValue === "checkbox3"}
                                        ref={(el) => (Inputelem.current.third = el)}
                                        onChange={handleRadioChange} type="radio" id="checkbox3" name="checkboxes3" value="checkbox3" />
                                   <label htmlFor="checkbox3">landLord</label>
                                   <br />

                                   <input checked={selectedValue === "checkbox4"}
                                        ref={(el) => (Inputelem.current.fourth = el)}
                                        onChange={handleRadioChange} type="radio" id="checkbox4" name="checkboxes4" value="checkbox4" />
                                   <label htmlFor="checkbox4">labour</label>
                                   <br />


                                   <input type="submit" className='btn' /><br />
                              </form>
                              <form onSubmit={handleSubmit2}>
                                   <p >What is Your Age???</p>

                                   <input checked={selectedValue2 === "checkboxes5"}
                                        ref={(el) => (Inputelem2.current[0] = el)}
                                        onChange={handleRadioChange2} type="radio" id="checkbox12" name="checkboxes5" value="checkboxes5" />
                                   <label htmlFor="checkbox12"> 12</label>
                                   <br />

                                   <input checked={selectedValue2 === "checkboxes6"}
                                        ref={(el) => (Inputelem2.current[1] = el)}
                                        onChange={handleRadioChange2} type="radio" id="checkbox22" name="checkboxes6" value="checkboxes6" />
                                   <label htmlFor="checkbox22"> 22</label>
                                   <br />

                                   <input checked={selectedValue2 === "checkboxes7"}
                                        ref={(el) => (Inputelem2.current[2] = el)}
                                        onChange={handleRadioChange2} type="radio" id="checkbox32" name="checkboxes7" value="checkboxes7" />
                                   <label htmlFor="checkbox32"> 32</label>
                                   <br />

                                   <input checked={selectedValue2 === "checkboxes8"}
                                        ref={(el) => (Inputelem2.current[3] = el)}
                                        onChange={handleRadioChange2} type="radio" id="checkbox42" name="checkboxes8" value="checkboxes8" />
                                   <label htmlFor="checkbox42"> 42</label>
                                   <br />
                                   <input type='submit' className='btn' />
                              </form>
                              {/* <form>
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
                              </form> */}

                         </div>
                    </section>
               </div>
          </>
     )
}

export default Quiz





