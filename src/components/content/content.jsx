import { BrowserRouter, Route, Routes } from "react-router-dom";
import s from "./content.module.css"
import Dialogs from "./dialogs/dialogs";
import News from './news/news';

let Content = (props) => {
    return (
        <BrowserRouter>
            <div className={s.content}>
                <Routes>
                    <Route path='/Dialogs' element={<Dialogs />} />
                    <Route path='/News' element={<News />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Content;