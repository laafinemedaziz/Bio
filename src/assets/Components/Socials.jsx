import QR from "../Images/QR.jpg"
import LinkedinIcon from '../Images/SocialsImgs/linkedin.svg'
import GithubIcon from '../Images/SocialsImgs/github.svg'
import InstagramIcon from '../Images/SocialsImgs/instagram.svg'
import FacebookIcon from '../Images/SocialsImgs/facebook.svg'
import WhatsappinIcon from '../Images/SocialsImgs/whatsapp.svg'
export function Socials(){
    return (
        <div className="SocialsContainer">
            <ul className="Socials">
                <li><a href="https://www.linkedin.com/in/laafine-med-aziz-78a309284/" target="_blank" className="linkedin"><img src={LinkedinIcon} alt="LinkedinIcon" /></a></li>
                <li><a href="https://github.com/laafinemedaziz" target="_blank" className="github"><img src={GithubIcon} alt="GithubIcon" /></a></li>
                <li><a href="https://www.instagram.com/medazizlaafine/"target="_blank" className="instagram"><img src={InstagramIcon} alt="InstagramIcon" /></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100011250690385" target="_blank"className="facebook"><img src={FacebookIcon} alt="FacebookIcon" /></a></li>
                <li><a href={QR} target="_blank" className="whatsapp"><img src={WhatsappinIcon} alt="WhatappIcon" /></a></li>
            </ul>
        </div>
    )
}