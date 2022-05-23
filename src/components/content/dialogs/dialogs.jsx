import { NavLink } from "react-router-dom";
import s from "./dialogs.module.css"
import DialogItem from './dialog/dialogItem';
import Message from "./message/message";
import { useRef } from "react";

const Dialogs = (props) => {

    let refNewMessage = useRef()

    let NewMessage = () => {
        let textFromNewMessage = refNewMessage.current.value
        alert(textFromNewMessage)
    }

    let dialogElement = props.dialogs
    .map( d => <DialogItem name={d.name} id={d .id}/> )

    let messageElement = props.message
    .map( m => <Message message={m.message}/> )

    return (
        <div className={s.dialogs_bg}>
            <div className={s.dialog}> 
                {messageElement} 
                <div className={s.pushNewMessage}>
                    <textarea ref={refNewMessage} className={s.text_area}></textarea>
                    <button onClick={ NewMessage }>Отправить</button>
                </div>
            </div>
            <div className={s.dialog_items}>
                {dialogElement}
            </div>
        </div>
    );
}

export default Dialogs;