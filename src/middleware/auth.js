import React, { Children, useContext } from "react";


const Auth = () =>{
     const context = useContext();
     return (
          <div value={context}>
               {Children}
          </div>
     )
}

export default Auth;