import React from "react";
import "../styles/main.css"

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <header className="header">
                    <div className="header__wrapper">
                        <h1 className="header__title">
                            <strong>Hi, my name is <em>Yuri</em></strong><br />
                            a frontend developer
                        </h1>
                        <div className="header__text">
                            <p>with passion for learning and creating.</p>
                        </div>
                        <a href="src#!" className="btn">Download CV</a>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;