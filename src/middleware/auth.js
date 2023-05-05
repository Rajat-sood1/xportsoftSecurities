import React from "react";
import { useState } from "react";
import Users from "../data/Users";

export const Context = React.createContext(null);

export let x = null;
const Auth = ({ children }) => {
     const [userList, setUserList] = useState(Users);
     let [loggedInUser, setLoggedInUser] = useState({
          Name: null,
          Email: null,
          password: null,
          login: false,
          sub: []
     })

     const openModule = (i) => {
          let module = loggedInUser.sub.find(elem => elem.isActive);
          (module?.isActive && (module.isActive = false));
          if (!loggedInUser.sub[i].isActive) {
               if (i === 0 || Boolean(loggedInUser.sub[i - 1].isCompleted)) {
                    loggedInUser.sub[i].isActive = true;
                    clearInterval(x);
                    document.title = loggedInUser.sub[i].title;
                    x = setInterval(async () => {

                         if (loggedInUser.sub[i].progress >= loggedInUser.sub[i].duration) {
                              setLoggedInUser((prevState) => {
                                   const updatedSub = [...prevState.sub];
                                   updatedSub[i].isCompleted = true;
                                   return { ...prevState, sub: updatedSub };
                              });
                              clearInterval(x)
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
          <Context.Provider value={{ loggedInUser, setLoggedInUser, userList, setUserList, openModule, x }}>
               {children}
          </Context.Provider>
     )
}
export default Auth;     