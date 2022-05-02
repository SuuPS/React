import s from "./content.module.css"

let Content = () => {
    return(
        <div className={s.content_bg}>
            <div className="content_table">
                <p className={s.post_text}>text</p>       
            </div>        
        </div>
    );
}

export default Content;