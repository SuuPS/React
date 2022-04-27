
import s from "./navbar.module.css";

let Navbar = () => {
    return (
        <div className={s.navbar}>
            <ul className={s.nav}>
                <li className={s.list_style}><a className={s.nav_list} href="#">message</a></li>
                <li className={s.list_style}><a className={s.nav_list} href="#">new</a></li>
                <ul>
                    <div className={s.border_inline}></div>
                    <li className={s.list_style}><a className={s.nav_list} href="#">Group</a></li>
                    <li className={s.list_style}><a className={s.nav_list} href="#">Friends</a></li>
                    <li className={s.list_style}><a className={s.nav_list} href="#">Games</a></li>
                    <li className={s.list_style}><a className={s.nav_list} href="#">Live video</a></li>
                    <li className={s.list_style}><a className={s.nav_list} href="#">Live music</a></li>
                </ul>
            </ul>
        </div>
    );
}

export default Navbar;