
import {  Routes, Route } from "react-router-dom";
import s from "./content.module.css"
import Dialogs from "./dialogs/dialogs";
import News from './news/news';

    // fetch('https://api.github.com/users/hacktivist123/repos')
    // .then(response => response.json())
    // .then(data => console.log(data));

let Content = (props) => {
    return (
            <div className={s.content}>
                <Routes>
                    <Route path='/Dialogs/*' element={
                        <Dialogs 
                        message={props.dialogList.MessageData}
                        dialogs={props.dialogList.DialogsData} 
                        />} />
                    <Route path='/News/*' element={<News posts={props.posts} addPost={props.addPost}/>}/> 
                </Routes>
            </div>
    );
}

export default Content;