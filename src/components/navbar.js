import "../App.css";

let Navbar = () => {
    return (
        <div className="navbar">
            <ul className="nav">
                <li className="list_style"><a className="nav_list" href="#">message</a></li>
                <li className="list_style"><a className="nav_list" href="#">new</a></li>
                <ul>
                    <div className="border_inline"></div>
                    <li className="list_style"><a className="nav_list" href="#">Group</a></li>
                    <li className="list_style"><a className="nav_list" href="#">Friends</a></li>
                    <li className="list_style"><a className="nav_list" href="#">Games</a></li>
                    <li className="list_style"><a className="nav_list" href="#">Live video</a></li>
                    <li className="list_style"><a className="nav_list" href="#">Live music</a></li>
                </ul>
            </ul>
        </div>
    );
}

export default Navbar;