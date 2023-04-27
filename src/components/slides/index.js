import React from "react";

const Slides = ({src}) =>{
     return (

          <>
               <iframe title="Module Slides" src={src} width="720px" height="480px" frameBorder="0">This is an embedded  <a target="_blank" href="https://office.com" rel="noreferrer">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps" rel="noreferrer">Office</a></iframe>
          </>
     )
}

export default Slides;