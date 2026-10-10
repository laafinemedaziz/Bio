import EmailIcon from '../Images/CoordinatesImgs/email.png'
import LocationIcon from '../Images/CoordinatesImgs/location.png'
import PhoneIcon from '../Images/CoordinatesImgs/phone.png'
import LightEmail from '../Images/CoordinatesImgs/light-email.png'
import LightLocation from '../Images/CoordinatesImgs/light-location.png'
import LightPhone from '../Images/CoordinatesImgs/light-phone.png'
export function Coordinates (props){
    return(
        <ul className="coordinates">
                <li className="Adress"><img src={props.darkMode ? LocationIcon : LightLocation} alt="" className='icon'/>Tunis, Tunisia</li>
                <li className="Email" style ={{
                    borderRightColor : props.darkMode ? "#ffffff79" : "#000000",
                    borderLeftColor : props.darkMode ? "#ffffff79" : "#000000"
                }}><img src={props.darkMode ? EmailIcon : LightEmail} alt="" className='icon' />laafinemohamedaziz@gmail.com</li>
                <li className="Phone"><img src={props.darkMode ? PhoneIcon : LightPhone} alt="" className='icon'/>+216 24 335 292</li>
            </ul>
    )
}