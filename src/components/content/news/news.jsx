import s from "./news.module.css"
import Post from "./posts/post";
import MyProfileHeader from "./MyProfileHeader/MyProfileHeader"

let News = () => {

    let posts = [
        {text: "Ребята!!! Внимание!!! Пропсы (props)"},
        {text: "важнейшая тема (на мой скромный взгляд). Важно ЧЁТКО-ЧЁТКО представлять"},
        {text: "Поддержать меня и получить доступ к дополнительному контенту"}
    ]

    let postElement = posts.map( p => <Post textInnerHtmlPost={[p.text]}/> )
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