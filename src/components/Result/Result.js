import React from "react";
import { NavLink } from "react-router-dom";




const Results = ({ handleRestartClick, score }) => {

    return (
        <>
            <h2>Results</h2>
            <div className='d-flex result' style={score >= 2 ? { color: 'green' } : { color: 'red' }}>
                <div className={score >= 2 ? 'green' : 'error'}></div>
                {
                    score >= 2
                        ?
                        <p>Congratulations! You scored {score * 25} out of {100}. Next Module has been unlocked. </p>
                        :
                        <p>Oops! You scored {score * 25} out of {100}. You need to obtain atleast 50% to unlock next module. </p>
                }
            </div>
            <div className='q-next'>
                {
                    score >= 2
                        ?
                        <NavLink to='/modules'>
                            <button className='btn' onClick={handleRestartClick} >Modules</button>
                        </NavLink>
                        :
                        <button className='btn' onClick={handleRestartClick} >Restart</button>

                }
            </div>
        </>
    );
};

export default Results;