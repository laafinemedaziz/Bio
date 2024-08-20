import MyImage from "../Images/me.jpg"
import {Socials} from './Socials'
import Resume from '../Files/Resume.pdf'
import CV from '../Files/CV.pdf'
export function MainContent(){
    return(
        <div className="Container">
            <img src={MyImage} alt="My image" width="250rem" className="Me--Image"/>
            <h1>Med Aziz Laafine</h1>
            <p className="bio">Motivated, passionate and highly disciplined computer science student </p>
            <ul className="coordinates">
                <li className="Adress">13,9 Avril,Ennajet,Oued Ellil,Chabaw,Manouba,2021</li>
                <li className="Email">laafine.med.aziz@gmail.com</li>
                <li className="Phone">+216 24335292</li>
            </ul>
            <Socials />
            <div className="resume">
                <p>Professional Resume: <a href={Resume} target="_blank">English</a> | <a href={CV} target="_blank">French</a></p>
            </div>
        </div>
    )
}