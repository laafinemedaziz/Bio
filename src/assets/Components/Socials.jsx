import QR from "../Images/QR.jpg"
export function Socials(){
    return (
        <div className="SocialsContainer">
            <h3>Social medias :</h3>
            <ul className="Socials">
                <li><a href="https://www.linkedin.com/in/laafine-med-aziz-78a309284/" target="_blank" className="linkedin">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/medazizlaafine/"target="_blank" className="instagram">Instagram</a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100011250690385" target="_blank"className="facebook">Facebook</a></li>
                <li><a href={QR} target="_blank" className="whatsapp">Whatsapp</a></li>
            </ul>
        </div>
    )
}