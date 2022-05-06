
import { NavLink, Link, Outlet} from 'react-router-dom';

import s from "./navbar.module.css";



let Navbar = () => {

    // let activeClassName = s.active;

    return (
        <div className={s.navbar}>
            <ul className={s.nav}>
                <li className={s.list_style}>
                    <NavLink className={
                        ({ isActive }) => isActive ? s.active : s.nav_list
                        }           
                    to="/Dialogs">message</NavLink>
                </li>
                <li className={s.list_style}>
                    <NavLink className={
                        ({ isActive }) => isActive ? s.active : s.nav_list
                        } to="/News">new</NavLink>
                </li>
                <ul>
                    <div className={s.border_inline}></div>
                    <li className={s.list_style}><a className={s.nav_list} href="#">Group</a></li>
                    <li className={s.list_style}><a className={s.nav_list} href="#">Friends</a></li>
                    <li className={s.list_style}><a className={s.nav_list} href="#">Games</a></li>
                    <li className={s.list_style}><a className={s.nav_list} href="#">Live video</a></li>
                </ul>
                <div className={s.border_inline}></div>
                <li className={s.list_style}><a className={s.nav_list} href="#">Setting</a></li>
            </ul>
        </div>
    );
}

export default Navbar;