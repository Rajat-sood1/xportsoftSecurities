import React, { useContext, useRef, useState } from "react";
import { Navigate } from 'react-router'
import { Context } from "../../middleware/auth";
import Modules from "../../data/Modules";


const SignInUp = () => {

     //   DESTRUCTURING OF GLOBAL STATES USING USECONTEXT
     const { loggedInUser, setLoggedInUser, userList, setUserList, toaster } = useContext(Context);

     //   CREATED STATES;
     const [clasess, setClass] = useState(' ');
     const userCredential = useRef({});

     // IMPLEMENTING NAVIGATION ON USER LOGIN
     // const navigate = useNavigate();

     //   NEW USER SIGN UP FUNCTION
     const SignUp = (e) => {
          e.preventDefault();
          let status = userList.find((user) => user.Email === userCredential.current.Semail.value);
          if (!status) {
               if (!userCredential.current.Semail.value.includes('@')) {
                    toaster(true, 'Invalid or Incorrect Email!');
               }
               else {

                    setUserList((user) => ([...user, {
                         Name: userCredential.current.name.value,
                         Email: userCredential.current.Semail.value,
                         password: userCredential.current.Spassword.value,
                         login: false,
                         sub: JSON.parse(JSON.stringify(Modules))
                    }]))

                    toaster(false, 'You are successfuly registered!')
               }
          } else {
               toaster(true, (userCredential.current.Semail.value + ' is already registered with us!'));
          }
     }

     //  EXISTING USER LOGIN FUNCTION
     const signIn = (e) => {
          e.preventDefault();
          const loggingUser = userList.find(
               (user) => user.Email === userCredential.current.email.value
          );
          if (loggingUser !== undefined) {
               if (loggingUser.email === loggedInUser.Email) {
                    if (loggingUser.password === userCredential.current.password.value) {
                         setLoggedInUser((user) => ({ ...user, login: true }))
                         toaster(false, ('Welcome Back ' + loggedInUser.Name + "!"));

                    } else {
                         toaster(true, 'Invalid User Name or User Password!');

                    }

               }
               else if (loggingUser.password === userCredential.current.password.value) {
                    setLoggedInUser((elem) => ({
                         ...elem,
                         Name: loggingUser.Name,
                         Email: loggingUser.Email,
                         password: loggingUser.password,
                         login: true,
                         sub: loggingUser.sub
                    }
                    ))
                    toaster(false, ('Welcome Back ' + loggingUser.Name + "!"));

               } else {
                    toaster(true, "Invalid User Name Or Password!");
                    userCredential.current.password.value = "";
               }
          } else {
               toaster(true, "Invalid Credentials!");
               userCredential.current.password.value = "";
               userCredential.current.email.value = "";

          }
     };

     // IF USER ALREADY LOGGED IN
     if (loggedInUser.login) {
          return <Navigate to="/dashboard" replace={true} />;
     }
     // IF NO USER LOGGED IN
     return (
          <React.Fragment>
               <div className={'container ' + clasess}>
                    <div className="form-container sign-up-container">

                         {/* {    CREATE NEW USER      */}
                         <form id="signUp">
                              <h1>Create Account</h1>
                              <div className="social-container">
                                   <a href="google.com" className="social"><i className="fab fa-facebook-f"></i></a>
                                   <a href="google.com" className="social"><i className="fab fa-google-plus-g"></i></a>
                                   <a href="google.com" className="social"><i className="fab fa-linkedin-in"></i></a>
                              </div>
                              <span>or use your email for registration</span>
                              <input className="login" type="text" ref={(el) => (userCredential.current.name = el)} placeholder="Name" required />
                              <input className="login" type="email" ref={(el) => (userCredential.current.Semail = el)} placeholder="Email" required />
                              <input className="login" type="password" ref={(el) => (userCredential.current.Spassword = el)} placeholder="Password" required />
                              <button type="submit" className="btn s-btn" onClick={(e) => { SignUp(e); setClass(' '); }}>Sign Up</button>
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
                              <input className="login" ref={(el) => (userCredential.current.email = el)} value={userCredential.current.value} type="email" placeholder="Email" required />
                              <input className="login" ref={(el) => (userCredential.current.password = el)} value={userCredential.current.value} type="password" placeholder="Password" required />
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