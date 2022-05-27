import { useRef } from "react";
import { NavLink } from "react-router-dom";
import s from "./MyProfileHeader.module.css"

let MyProfileHeader = (props) => {

    let newPostElement = useRef()

    let AddPost = () => {
        let textFromPost = newPostElement.current.value
        props.addPost(textFromPost)  
        textFromPost = ""
    }

    let onPostChange = () => {

    }

    return (
        <div className={s.profile_bgr}>
            <div className="content_table">
                <div className={s.profile_username}>Jusup munanbekov</div>
                <div className={s.profile_flex}>
                    <img className={s.img_profile} src="https://avatars.mds.yandex.net/i?id=cc5999fc85ba867209b4b58016eee4cd-5220968-images-thumbs&n=13"></img>
                    <div className={s.new_post}>
                        <textarea onChange={ onPostChange } ref={newPostElement} className={s.input_text} 
                            value={props.newPostText}/>
                        <button onClick={ AddPost } className={s.send_btn}>send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfileHeader;