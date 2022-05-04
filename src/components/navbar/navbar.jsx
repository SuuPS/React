
import { BrowserRouter as NavLink, Link } from 'react-router-dom';

import s from "./navbar.module.css";



let Navbar = () => {
    return (
        <div className={s.navbar}>
            <ul className={s.nav}>
                {/* <li className={s.list_style}> */}
                    <Link className={s.nav_list} to="/Dialogs">message</Link>
                {/* </li> */}
                {/* <li className={s.list_style}>
                    <NavLink className={s.nav_list} to="/News">new</NavLink>
                </li> */}
                {/* <ul>
                    <div className={s.border_inline}></div>
                    <li className={s.list_style}><NavLink className={s.nav_list} href="#">Group</NavLink></li>
                    <li className={s.list_style}><NavLink className={s.nav_list} href="#">Friends</NavLink></li>
                    <li className={s.list_style}><NavLink className={s.nav_list} href="#">Games</NavLink></li>
                    <li className={s.list_style}><NavLink className={s.nav_list} href="#">Live video</NavLink></li>
                </ul>
                <div className={s.border_inline}></div>
                <li className={s.list_style}><NavLink className={s.nav_list} href="#">Setting</NavLink></li> */}
            </ul>
        </div>
    );
}

export default Navbar;