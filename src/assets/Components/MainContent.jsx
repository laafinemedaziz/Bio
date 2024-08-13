import MyImage from "../Images/me.jpg"
import {Socials} from './Socials'
import Resume from '../Files/Resume.pdf'
export function MainContent(){
    return(
        <div className="Container">
            <img src={MyImage} alt="My image" width="250rem" className="Me--Image"/>
            <h1>Med Aziz Laafine</h1>
            <p>Motivated, passionate and highly disciplined computer science student </p>
            <ul className="coordinates">
                <li className="Adress">19,9 Avril,Ennajet,Oued Ellil,Chabaw,Manouba,2021</li>
                <li className="Email">laafine.med.aziz@gmail.com</li>
                <li className="Phone">+216 24335292</li>
            </ul>
            <Socials />
            <a href={Resume} target="_blank" className="resume">Professional resume</a>
        </div>
    )
}