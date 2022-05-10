import { NavLink } from "react-router-dom";
import s from "./dialogs.module.css"
import DialogItem from './dialog/dialogItem';
import Message from "./message/message";

const Dialogs = (props) => {

    let DialogsData = [
        {name: "Александр",    id:"1"},
        {name: "Жусуп",        id:"2"},
        {name: "Неизвестный",  id:"3"}
    ]

    let dialogElement = DialogsData
    .map( d => <DialogItem name={d.name} id={d .id}/> )

    let MessageData = [
        {message: "Hi"},
        {message: "How are you"},
    ]
    let messageElement = MessageData
    .map( m => <Message message={m.message}/> )

    return (
        <div className={s.dialogs_bg}>
            <div className={s.dialog}> 
                {messageElement} 
            </div>
            <div className={s.dialog_items}>
                {dialogElement}
            </div>
        </div>
    );
}

export default Dialogs;