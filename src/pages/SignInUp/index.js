import React, { useState } from "react";
import '../../assets/styles/signInUp.css'


const SignInUp = () =>{

     const [clasess, setClass] = useState(false);
     


     return (
             
     <div className={clasess?'container right-panel-active':"container "} id="container">
          <div className="form-container sign-up-container">

               {/*      CREATE NEW USER      */}
               <form id="signUp">
                    <h1>Create Account</h1>
                    <div className="social-container">
                         <a  href="google.com"className="social"><i className="fab fa-facebook-f"></i></a>
                         <a  href="google.com"className="social"><i className="fab fa-google-plus-g"></i></a>
                         <a  href="google.com"className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Sign Up</button>
               </form>
          </div>

          <div className="form-container sign-in-container">

               {/*     LOG IN FORM     */}
               <form id="signIn">
                    <h1>Sign in</h1>
                    <div className="social-container">
                         <a  href="google.com"className="social"><i className="fab fa-facebook-f"></i></a>
                         <a  href="google.com"className="social"><i className="fab fa-google-plus-g"></i></a>
                         <a  href="google.com"className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <a href="google.com">Forgot your password?</a>
                    <button type="submit">Sign In</button>
               </form>
          </div>

          {/*      NAVIGATION BETWEEN SIGN IN AND SIGN UP PAGE   */}
          <div className="overlay-container">
               <div className="overlay">

                    {/*  NAVIGATE TO SIGN IN PAGE      */}
                    <div className="overlay-panel overlay-left">
                         <h1>Welcome Back!</h1>
                         <p>To keep connected with us please login with your personal info</p>
                         <button className="ghost" id="signIn" onClick={()=>setClass(!clasess)}>Sign In</button>
                    </div>

                    {/* NAVIGATE TO SIGN UP PAGE */}
                    <div className="overlay-panel overlay-right">
                         <h1>Hello, Friend!</h1>
                         <p>Enter your personal details and start journey with us</p>
                         <button className="ghost" id="signUp" onClick={()=>setClass(!clasess)}>Sign Up</button>
                    </div>
               </div>
          </div>
     </div>
     )
}

export default SignInUp;