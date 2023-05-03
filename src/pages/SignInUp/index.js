import React, { useContext, useRef, useState } from "react";
import { Navigate } from 'react-router'
import { Context } from "../../middleware/auth";


const SignInUp = () => {

     //   DESTRUCTURING OF GLOBAL STATES USING USECONTEXT
     const { loggedInUser, setLoggedInUser, userList, setUserList, modules} = useContext(Context);

     //   CREATED STATES;
     const [clasess, setClass] = useState(' ');
     const userCredential = useRef({});

     //   NEW USER SIGN UP FUNCTION
     const SignUp = (e) => {
          e.preventDefault();
          let status = userList.find((user)=>user.Email === userCredential.current.Semail.value);
          if(!status){
               if(!userCredential.current.Semail.value.includes('@')){alert('The Email you provided is not correct.') }
               else{

                    setUserList((user) => ([...user, {
                         Name: userCredential.current.name.value,
                         Email: userCredential.current.Semail.value,
                         password: userCredential.current.Spassword.value,
                         login: false,
                    }]))
                    alert('You have been registered successfuly, You can login with your credentials now');
               }
          }
          else if(!userCredential.current.Semail.value.includes('@')){
                    alert('The Email you provided is not correct.')
          }else{
               alert('we found an account linked with us using this ID' + userCredential.current.Semail.value);
          }
     }

     //  EXISTING USER LOGIN FUNCTION
     const signIn = (e) => {
          e.preventDefault();
          const loggingUser = userList.find(
               (user) => user.Email === userCredential.current.email.value
          );
          if ( loggingUser !== undefined ) {
               if(loggingUser.email === loggedInUser.Email){
                    setLoggedInUser((user)=>({...user, login:true}))
               }
               else if (loggingUser.password === userCredential.current.password.value) {
                    setLoggedInUser((elem) => ({
                         ...elem,
                         Name: loggingUser.Name,
                         Email: loggingUser.Email,
                         password: loggingUser.password,
                         login: true,
                         sub:modules
                    }

                    ))

               } else {
                    alert("Password Didn't match");
                    userCredential.current.password.value = "";
               }
          } else {
               alert("User Doesn't Exist");
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