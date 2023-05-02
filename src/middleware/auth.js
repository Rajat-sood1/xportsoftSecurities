import React from "react";
import Modules from "../data/Modules";
import { useState } from "react";
import Users from "../data/Users";
const modules = Modules;

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
                    console.log(x);
                    document.title = loggedInUser.sub[i].title;
                    x = setInterval(async () => {
                         console.log("timer on")
                         loggedInUser.sub[i].duration--;

                         if (loggedInUser.sub[i].duration <= 0) {
                              clearInterval(x)
                              loggedInUser.sub[i].isCompleted = true;
                              console.log("timer Expired");
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
          <Context.Provider value={{ loggedInUser, setLoggedInUser, modules, userList, setUserList, openModule,x }}>
               {children}
          </Context.Provider>
     )
}
export default Auth;     