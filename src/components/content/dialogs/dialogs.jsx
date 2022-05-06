import { NavLink } from "react-router-dom";
import s from "./dialogs.module.css"

const DialogItem = (props) => {

    return (
    <div className={s.dialog_users}>
        <NavLink to={"/Dialogs/" + `${props.id}`}>{props.name}</NavLink>
    </div>
    )
}

let Dialogs = (props) => {
    return (
        <div className={s.dialogs_bg}>
            <div className={s.dialog}></div>
            <div className={s.dialog_items}>
                <DialogItem name="Александр"   id="1"/>
                <DialogItem name="Жусуп"       id="2"/>
                <DialogItem name="Неизвестный" id="3"/>
            </div>
        </div>
    );
}

export default Dialogs;