import MyImage from "../Images/me.jpg"
export function MainContent(){
    return(
        <div className="Container">
            <img src={MyImage} alt="My image" width="250rem" className="Me--Image"/>
        </div>
    )
}