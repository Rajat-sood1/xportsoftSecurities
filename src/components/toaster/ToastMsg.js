import { useContext, useEffect, useRef } from "react";
import { Context } from "../../middleware/auth";



const ToastMsg = () => {
    const p = useRef(null);

    const { msg, setMsg } = useContext(Context);

    useEffect(() => {
        p.current.classList.remove('p-animaion');
        setTimeout(() => {
            p.current.classList.add('p-animation');
        }, 100);

        setTimeout(() => {
            setMsg(null)
        }, 4000)

    }, [setMsg])

    return (
        <>

            <div className="popper" ref={p}>
                <div className="p-content" >
                    <div className="d-flex">
                        <div className="msg-status">
                            <div className={msg.error ? 'error' : "green"}></div>
                        </div>
                        <div className="msg-content">
                            <p className="msg">
                                {msg.content}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default ToastMsg;
