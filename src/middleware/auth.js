import React, { useRef, useState } from "react";
import Users from "../data/Users";

export const Context = React.createContext(null);

const Auth = ({ children }) => {
     const [userList, setUserList] = useState(Users);
     let [loggedInUser, setLoggedInUser] = useState({
          Name: null,
          Email: null,
          password: null,
          login: false,
          sub: []
     })

     const interval = useRef(null);

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
               } else {
                    console.log('Complete previous Module first')
               }
          }
          else {
               return console.log(loggedInUser.sub[i].title, "is already open")
          }
     }

     return (
          <Context.Provider value={{ loggedInUser, setLoggedInUser, userList, setUserList, openModule, interval }}>
               {children}
          </Context.Provider>
     )
}
export default Auth;     