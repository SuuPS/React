import { NavLink } from "react-router-dom";
import s from "./dialogItem.module.css"

const DialogItem = (props) => {
    return (
        <div className={s.dialog_users}>
            <NavLink to={"/Dialogs/" + `${props.id}`}>{props.name}</NavLink>
        </div>
        )
}

export default DialogItem;