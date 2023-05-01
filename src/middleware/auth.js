import React from "react";
import Modules from "../data/Modules";
import { useState } from "react";

const modules = Modules;

export const Context = React.createContext(null);


const Auth = ({ children }) => {

     const [user, setUser] = useState({
          Name: null,
          email: null,
          password: null,
          login: false,
          sub: []
     });

     const [ x, setX ] = useState(null);
     
     const openModule = (i) => {
          let module = user.sub.find(elem => elem.isActive);
          if (!user.sub[i].isActive) {
               if (i === 0 || Boolean(user.sub[i - 1].isCompleted)) {
                    (module.isActive && (module.isActive = false));
                    user.sub[i].isActive = true;
                    setX({x:clearInterval(x)});
                    document.title = user.title[i].title;

                    setX({x: setInterval(async () => {
                         console.log("timer on")
                         user.sub[i].duration--;

                         if (user.sub[i].duration <= 0) {
                              clearInterval(x)
                              user.sub[i].isCompleted = true;
                              console.log("timer Expired");
                         }

                    }, 1000)})
               } else {
                    console.log('Complete previous Module first')
               }
          }
          else {
               return console.log(Modules[i].title, "is already open")
          }
     }


     return (
          <Context.Provider value={{ user, setUser, modules, openModule }}>
               {children}
          </Context.Provider>
     )
}

export default Auth;     