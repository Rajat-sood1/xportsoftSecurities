import React, { useState } from "react";
// import '../../assets/styles/signInUp.css'
import { NavLink } from 'react-router-dom'


const SignInUp = () => {

     const [clasess, setClass] = useState(' ');

     return (
          <React.Fragment>

               <div className={'container ' + clasess} id="container">
                    <div className="form-container sign-up-container">

                         {/*      CREATE NEW USER      */}
                         <form id="signUp">
                              <h1>Create Account</h1>
                              <div className="social-container">
                                   <a href="google.com" className="social"><i className="fab fa-facebook-f"></i></a>
                                   <a href="google.com" className="social"><i className="fab fa-google-plus-g"></i></a>
                                   <a href="google.com" className="social"><i className="fab fa-linkedin-in"></i></a>
                              </div>
                              <span>or use your email for registration</span>
                              <input type="text" placeholder="Name" required />
                              <input type="email" placeholder="Email" required />
                              <input type="password" placeholder="Password" required />
                              <button type="submit" className="btn s-btn">Sign Up</button>
                         </form>
                    </div>

                    <div className="form-container sign-in-container">

                         {/*     LOG IN FORM     */}
                         <form id="signIn">
                              <h1>Sign in</h1>
                              <div className="social-container">
                                   <a href="google.com" className="social"><i className="fab fa-facebook-f"></i></a>
                                   <a href="google.com" className="social"><i className="fab fa-google-plus-g"></i></a>
                                   <a href="google.com" className="social"><i className="fab fa-linkedin-in"></i></a>
                              </div>
                              <span>or use your account</span>
                              <input type="email" placeholder="Email" required />
                              <input type="password" placeholder="Password" required />
                              <a href="google.com">Forgot your password?</a>
                              
                              
                              <NavLink to='/dashboard'><button className="btn s-btn" type="submit">Sign In</button></NavLink>
                         </form>
                    </div>

                    {/*      NAVIGATION BETWEEN SIGN IN AND SIGN UP PAGE   */}
                    <div className="overlay-container">
                         <div className="overlay">

                              {/*  NAVIGATE TO SIGN IN PAGE      */}
                              <div className="overlay-panel overlay-left">
                                   <h1>Welcome Back!</h1>
                                   <div className="logo logo-s"></div>
                                   <button className="btn ghost" id="signIn" onClick={() => setClass(' ')}>Sign In</button>
                              </div>

                              {/* NAVIGATE TO SIGN UP PAGE */}
                              <div className="overlay-panel overlay-right">
                                   <h1>Hello, Friend!</h1>
                                   <div className="logo logo-s"></div>

                                   <button className="btn ghost" id="signUp" onClick={() => setClass('right-panel-active')}>Sign Up</button>
                              </div>
                         </div>
                    </div>
               </div>
          </React.Fragment>
     )
}

export default SignInUp;