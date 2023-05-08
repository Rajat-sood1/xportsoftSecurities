import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../middleware/auth";

//        GETTING USER FROM GLOBAL STATE
const User = () => {
     const { loggedInUser } = useContext(Context);
     return loggedInUser.sub;

}

//        DYNAMIC PROGRESS COUNTING FOR PARTICULAR MODULE
export const Progress = (i) => {
     let modules = User();

     let hours = Math.floor(modules[i].progress / 3600).toString().padStart(2, '0');
     let minutes = Math.floor((modules[i].progress % 3600) / 60).toString().padStart(2, '0');
     let seconds = Math.floor(modules[i].progress % 60).toString().padStart(2, '0');
     return [hours, minutes, seconds];
};

//        TOTAL PROGRESS FOR DONE MODULES
export const TotalProgress = () => {
     let modules = User();

     const progress = modules.reduce((acc, curVal,) => {
          return acc + curVal.progress;
     }, 0);
     let hours = Math.floor(progress / 3600).toString().padStart(2, '0');
     let minutes = Math.floor((progress % 3600) / 60).toString().padStart(2, '0');
     let seconds = Math.floor(progress % 60).toString().padStart(2, '0')
     return [hours, minutes, seconds];
};


//          DYNAMIC DURATION FOR PARTICULAR MODULE
export const Duration = (i) => {
     let modules = User();
     let hours = Math.floor(modules[i].duration / 3600).toString().padStart(2, '0');
     let minutes = Math.floor((modules[i].duration % 3600) / 60).toString().padStart(2, '0');
     let seconds = Math.floor(modules[i].duration % 60).toString().padStart(2, '0');
     return [hours, minutes, seconds];
}


//        TOTAL DURATION FOR DONE MODULE
export const TotalDuration = () => {
     let modules = User();

     const duration = modules.reduce((acc, curVal,) => {
          return acc + curVal.duration;
     }, 0);
     let hours = Math.floor(duration / 3600).toString().padStart(2, '0');
     let minutes = Math.floor((duration % 3600) / 60).toString().padStart(2, '0');
     let seconds = Math.floor(duration % 60).toString().padStart(2, '0')
     return [hours, minutes, seconds];
};

// Running progress time
const RProgress = ({ i }) => {
     let modules = User();
     const [timer, setTimer] = useState(0);
     const interval = useRef();
     useEffect(() => {
          setTimer(modules[i].progress);
          if (modules[i].progress < modules[i].duration) {
               interval.current = setInterval(() => {
                    setTimer((time) => time + 1);
               }, 1000);
          }
          return () => {
               clearInterval(interval.current);
          }
     }, [setTimer, i, modules])

     let hours = Math.floor(timer / 3600).toString().padStart(2, '0');
     let minutes = Math.floor((timer % 3600) / 60).toString().padStart(2, '0');
     let seconds = Math.floor(timer % 60).toString().padStart(2, '0');
     return <span> {hours + ":" + minutes + ":" + seconds}</span>
};
export default RProgress;