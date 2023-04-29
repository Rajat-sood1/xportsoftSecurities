import React from "react";
import modules from "../utils/modules";

const Modules = modules;
export const Context = React.createContext(null);
const Auth = ({children}) =>{
     return (
          <Context.Provider value={Modules}>
               {children}
          </Context.Provider>
     )
}

export default Auth;