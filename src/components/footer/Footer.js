import React from "react";
import "../styles/main.css"
import vk from "../img/icons/vk.svg";
import github from "../img/icons/gitHub.svg";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <ul className="social">
                            <li className="social__item"><a href="src#!"><img src={vk} alt="Link" /></a></li>
                            <li className="social__item"><a href="src#!"><img src={github} alt="Link" /></a></li>
                        </ul>
                        <div className="copyright">
                            <p>© 2022 frontend-dev.com</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;