import {MainContent} from "./assets/Components/MainContent"
import './App.css'
import {Footer} from "./assets/Components/Footer"
import React from "react"
import Light from "./assets/Images/lightMode.png"
import Dark from "./assets/Images/darkMode.png"
function App() {
  //Switch between dark and light mode state
  const [darkMode,setDarkMode]=React.useState(true)
  document.body.style.backgroundColor = darkMode ? "#181818" : "#E4E0E1"
  document.body.style.color = darkMode ? "#F5F5F5" : "#181818"
  function switchMode(){
    setDarkMode(prevMode => !prevMode)
  }
 
  return (
    //Switch between dark and light mode button
    <div className="mainContainer" style={{
      backgroundColor: darkMode ? "transparent" : "#F5F5F5"
    }}>
      <div className="buttonsDiv">
        <button onClick={switchMode}style={{
          backgroundColor:darkMode ? "#363636":"#E4E0E1",
        }} className="buttons"><img src={darkMode ? Light : Dark}/></button>
      </div>
      <MainContent darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  )
}

export default App
