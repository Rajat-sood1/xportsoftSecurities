import React from "react";
import Modules from "../data/Modules";
import { useState } from "react";
import Users from "../data/Users";
import { Navigate } from "react-router-dom";
const modules = Modules;

export const Context = React.createContext(null);


const Auth = ({ children }) => {

     const [ x, setX ] = useState(null);
     const [userList,setUserList]=useState(Users);
     let [ loggedInUser,setLoggedInUser ]=useState({
          Name: null,
          Email: null,
          password:null,
          login: false,
          sub:[]
     }) 


     const openModule = (i) => {
          let module = loggedInUser.sub.find(elem => elem.isActive);
          if (!loggedInUser.sub[i].isActive) {
               if (i === 0 || Boolean(loggedInUser.sub[i - 1].isCompleted)) {
                    (module?.isActive && (module.isActive = false));
                    loggedInUser.sub[i].isActive = true;
                    setX({x:clearInterval(x)});
                    document.title = loggedInUser.title[i].title;
                    setX({x: setInterval(async () => {
                         console.log("timer on")
                         loggedInUser.sub[i].duration--;

                         if (loggedInUser.sub[i].duration <= 0) {
                              clearInterval(x)
                              loggedInUser.sub[i].isCompleted = true;
                              console.log("timer Expired");
                         }

                    }, 1000)})
                    return (<Navigate to={`/${loggedInUser.sub[i].title}/${i}`}/>)
               } else {
                    console.log('Complete previous Module first')
               }
          }
          else {
               return console.log(Modules[i].title, "is already open")
          }
     }


     return (
          <Context.Provider value={{ loggedInUser,setLoggedInUser, modules,userList, setUserList, openModule }}>
               {children}
          </Context.Provider>
     )
}

export default Auth;     