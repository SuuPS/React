import s from "./profile.module.css"

let Profile = () => {
    return (
        <div className={s.profile_bgr}>
            <div className="content_table">
                <div className={s.profile_username}>Jusup munanbekov</div>
                <div className={s.profile_flex}>
                    <img className={s.img_profile} src="https://gitlab.com/uploads/-/system/user/avatar/10329447/avatar.png?width=400"></img>
                    <div className={s.new_post}>
                        <textarea className={s.input_text}></textarea>
                        <button className={s.send_btn}>send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;