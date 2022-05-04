import s from "./news.module.css"
import Post from "./posts/post";
import MyProfileHeader from "./MyProfileHeader/MyProfileHeader"

let text_1 = "Ребята!!! Внимание!!! Пропсы (props)" +
    "важнейшая тема (на мой скромный взгляд). Важно ЧЁТКО-ЧЁТКО представлять"

let text_2 = "Поддержать меня и получить доступ к дополнительному контенту можно вот здесь:"

let News = () => {
    return (
        <div className="news">
            <MyProfileHeader />
            <div className={s.content_bg}>
                <Post textInnerHtmlPost={text_1} />
                <Post textInnerHtmlPost={text_2} />
            </div>
        </div>
    );
}

export default News;