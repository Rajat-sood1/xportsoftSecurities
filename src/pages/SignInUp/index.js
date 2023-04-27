import React, { useRef, useState } from "react";
import {  Navigate } from 'react-router'
import Users from '../../utils/users/index'


const SignInUp = () => {

     const [clasess, setClass] = useState(' ');
     let users = Users;
     const [user, setUser] = useState(null);
     const userCredential = useRef({});

     const signIn = (e) => {
       e.preventDefault();
       const loggedInUser = users.find(
         (user) => user.Email === userCredential.current.email.value
       );
       if (userCredential.current.email && loggedInUser !== undefined) {
         if (loggedInUser.password === userCredential.current.password.value) {
           setUser(loggedInUser, loggedInUser.password, userCredential.password.value );
         } else {
           alert("Password Didn't match");
           userCredential.current.password.value = " ";
           userCredential.current.email.value = " ";
         }
       } else {
         alert("User Doesn't Exist");
         userCredential.current.password.value = " ";
         userCredential.current.email.value = " ";

     }
     };
     
     if (user) {
       return <Navigate to="/dashboard" replace={true} />;
     }

     return (
          <React.Fragment>
               <div className={'container ' + clasess}>
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
                              <input className="login" type="text" placeholder="Name" required />
                              <input className="login" type="email" placeholder="Email" required />
                              <input className="login" type="password" placeholder="Password" required />
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
                              <input className="login" value={userCredential.current.email} ref={(el) => (userCredential.current.email = el)} type="email" placeholder="Email" required />
                              <input className="login" ref={(el) => (userCredential.current.password = el) } value={userCredential.current.value} type="password" placeholder="Password" required />
                              <a href="google.com">Forgot your password?</a>
                              
                              
                              <button className="btn s-btn" onClick={signIn} type="submit">Sign In</button>
                         </form>
                    </div>

                    {/*      NAVIGATION BETWEEN SIGN IN AND SIGN UP PAGE   */}
                    <div className="overlay-container">
                         <div className="overlay">

                              {/*  NAVIGATE TO SIGN IN PAGE      */}
                              <div className="overlay-panel overlay-left">
                                   <h1>Welcome Back!</h1>
                                   <div className="logo logo-s"></div>
                                   <button className="btn ghost" onClick={() => setClass(' ')}>Sign In</button>
                              </div>

                              {/* NAVIGATE TO SIGN UP PAGE */}
                              <div className="overlay-panel overlay-right">
                                   <h1>Hello, Friend!</h1>
                                   <div className="logo logo-s"></div>

                                   <button className="btn ghost" onClick={() => setClass('right-panel-active')}>Sign Up</button>
                              </div>
                         </div>
                    </div>
               </div>
          </React.Fragment>
     )
}

export default SignInUp;
