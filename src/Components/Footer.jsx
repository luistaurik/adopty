import React from "react";
import "../Components/Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareFacebook,faSquareGithub, faSquareInstagram,faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Footer(){

    return (
        <>
            <main className="footer">
                <ul className="social-media">
                <li className="social-acount"><a href="https://www.facebook.com/luisacostafuenmayor/"><FontAwesomeIcon icon={faSquareFacebook} /></a></li>
                <li className="social-acount"><a href="https://github.com/luistaurik"><FontAwesomeIcon icon={faSquareGithub} /></a></li>
                <li className="social-acount"><a href="https://www.instagram.com/luistaurik/"><FontAwesomeIcon icon={faSquareInstagram} /></a></li>
                <li className="social-acount"><a href="https://www.linkedin.com/in/acostafue/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
                <div className="footer-text">
                    <p>Take a look of our pet friends. If you are looking for a new pet, this is the place</p>
                </div>
            </main>
        </>
    )
}

export default Footer