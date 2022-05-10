import { NavLink } from "react-router-dom";
import s from "../dialogs.module.css"

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

export default Message;