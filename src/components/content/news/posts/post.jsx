import s from "./post.module.css"

let Post = (props) => {
    return(
        <div className={`content_table ${s.post_flex}`} >
            <img className={s.ava_post} src="https://avatars.mds.yandex.net/i?id=cc5999fc85ba867209b4b58016eee4cd-5220968-images-thumbs&n=13"></img>
            <p className={s.post_text}>{props.textInnerHtmlPost}</p>       
        </div>        
    );
}

export default Post;