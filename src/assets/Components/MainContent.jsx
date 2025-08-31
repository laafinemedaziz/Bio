import MyImage from "../Images/me.jpg"
import {Socials} from './Socials'
import {Coordinates} from './Coordinates'
import Resume from '../Files/Med-Aziz-Laafine-CV-ENG.pdf'
import CV from '../Files/Med-Aziz-Laafine-CV-FR.pdf'
import FranceIcon from '../Images/FlagsIcons/france.png'
import UKIcon from '../Images/FlagsIcons/unitedKingdom.png'
export function MainContent(props){
    return(
        <div className="Container">
            <div className="container1">
                <img style={{
                    borderColor: props.darkMode ? "#ffffff6e" : "#edaf05"
                }}src={MyImage} alt="My image" width="250rem" className="Me--Image"/>
                <div className="container2">
                    <h1>Hi, It's <span className="name">Aziz!</span></h1>
                    <Socials />
                </div>
            </div>
            <Coordinates darkMode={props.darkMode}/>
            
            <div className="resume">
                <p>Motivated, passionate and highly disciplined computer science graduate. 
                Here is my CV for further information :</p>
                <a href={CV} target="_blank"><img src={FranceIcon} alt="" className="flag"/></a>
                <a href={Resume} target="_blank"><img src={UKIcon} alt="" className="flag"/></a>
            </div>
        </div>
    )
}