import s from "./news.module.css"
import Post from "./posts/post";
import MyProfileHeader from "./MyProfileHeader/MyProfileHeader"

let News = (props) => {

    let postElement = props.posts.map( p => <Post textInnerHtmlPost={[p.text]}/> )
    return (
        <div className="news">
            <MyProfileHeader />
            <div className={s.content_bg}>
                {postElement}
            </div>
        </div>
    );
}

export default News;