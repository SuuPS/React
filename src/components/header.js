import "../App.css";

let Header = () => {
    return(
        <div className="header">
            <div className="menu">
                <img className="logo" src="data:image/png;base64,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"></img>
                <div className="flex_menu">
                <input placeholder="search" className="search_input" type="input"></input>  
                </div>
            </div>
        </div>
    );
}

export default Header;