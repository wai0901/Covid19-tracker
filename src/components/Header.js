import React from "react";
import './Header.css';

const Header = (props) => {
    const language = props.language
    return(
        <div className="header-container">
            <div className="header-title">
                <h3>{props.menuLanguage[0].title}</h3>  
            </div>
            <div className="button">
                <button onClick={() => props.languageHandler()}>{language?"English":"中文"}</button>
            </div>
        </div>
    )
}

export default Header;