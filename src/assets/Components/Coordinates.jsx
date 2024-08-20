import EmailIcon from '../Images/CoordinatesImgs/email.png'
import LocationIcon from '../Images/CoordinatesImgs/location.png'
import PhoneIcon from '../Images/CoordinatesImgs/phone.png'
export function Coordinates (){
    return(
        <ul className="coordinates">
                <li className="Adress"><img src={LocationIcon} alt="" className='icon'/>Oued Ellil, Manouba, Tunisia</li>
                <li className="Email"><img src={EmailIcon} alt="" className='icon' />laafine.med.aziz@gmail.com</li>
                <li className="Phone"><img src={PhoneIcon} alt="" className='icon'/>+216 24335292</li>
            </ul>
    )
}