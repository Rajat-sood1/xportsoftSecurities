import React, { useRef, useState } from "react";
import Users from "../data/Users";
import ToastMsg from "../components/toaster/ToastMsg";

export const Context = React.createContext(null);

const Auth = ({ children }) => {

     // PROGRESS COUNT FOR CURRENT OPEN MODULE
     const interval = useRef(null);

     // SET MESSAEG FOR TOASTER AND RENDER TOASTER ON CODITION BASIS
     const [msg, setMsg] = useState(null);


     //   ALL  USERS DATA
     const [userList, setUserList] = useState(Users);

     // CURRENT LOGGED IN USER
     let [loggedInUser, setLoggedInUser] = useState({
          Name: null,
          Email: null,
          password: null,
          login: false,
          sub: []
     })



     //    SHOW ERROR OR SUCCESS MESSAGE IN TOASTER
     const toaster = async (error, content) => {
          setMsg(
               {
                    error: error,
                    content: content
               }
          )
     };


     //        OPEN MODULE ON EACH CLICK

     const openModule = (i) => {
          if (!loggedInUser.sub[i].isActive) {
               if (i === 0 || Boolean(loggedInUser.sub[i - 1].isCompleted)) {
                    loggedInUser.sub[i].isActive = true;
                    clearInterval(interval.current);
                    document.title = loggedInUser.sub[i].title;
                    interval.current = setInterval(async () => {

                         if (loggedInUser.sub[i].progress >= loggedInUser.sub[i].duration) {
                              setLoggedInUser((prevState) => {
                                   const updatedSub = [...prevState.sub];
                                   updatedSub[i].isCompleted = true;
                                   return { ...prevState, sub: updatedSub };
                              });
                              clearInterval(interval.current)
                              console.log(loggedInUser)
                         } else {
                              loggedInUser.sub[i].progress++;
                         }
                    }, 1000)
               }
          }
     }

     return (
          // context Provider

          <Context.Provider value={{ loggedInUser, setLoggedInUser, userList, setUserList, openModule, interval, msg, setMsg, toaster }}>
               {
                    msg
                         ?
                         <ToastMsg ref={interval.first} />
                         :
                         ""

               }
               {children}
          </Context.Provider>
     )
}
export default Auth;

