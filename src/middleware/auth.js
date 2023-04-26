import React from "react";
import modules from "../utils/modules";

const Modules = modules;
const Context = React.createContext();
const Auth = ({children}) =>{
     return (
          <Context.Provider value={Modules}>
               {children}
          </Context.Provider>
     )
}

export default Auth;