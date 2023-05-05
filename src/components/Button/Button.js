import { useContext, useEffect, useState } from "react";
import { Context } from "../../middleware/auth";
import { NavLink } from "react-router-dom";


const Button = ({ i }) => {
    const { loggedInUser } = useContext(Context);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (loggedInUser.sub[i].isCompleted) {
            setStatus(true);
        }
    }, [i, loggedInUser]);
    return (
        <>

            {
                status
                    ?
                    <NavLink to='quiz'><button className="btn">Take Quiz</button></NavLink>
                    :
                    <button className="btn restricted">Take Quiz</button>
            }

        </>
    )

}

export default Button;