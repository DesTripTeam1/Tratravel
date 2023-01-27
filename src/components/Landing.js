import "../styles/Landing.css";
import React from 'react'
import {WelcomeImg, WelcomeGreet, WelcomeAbout} from "../styles/LandingStyles";

const Landing = () => {
  return (
    <>

   <WelcomeImg >
   <div className="center">
      <h1>
    <span>TRATRATRAVEL</span>
  
    <span>TRATRATRAVEL</span>
    <span>TRATRATRAVEL</span>
  
      </h1>
    </div>
   </WelcomeImg>

  <WelcomeGreet> 
    <h1 className="greet" >
    TE DAMOS <br></br> LA BIENVENIDA <br></br>A TRATRATRAVEL
    </h1>
  </WelcomeGreet>
  <WelcomeAbout > 
    <h1 className="aboutTitle" >
    ¿Qué es<br></br> Tra <br></br>Tra<br></br> Travel?
    </h1>
    <div className="aboutText">
      Tratratravel es un recomendador de vacaciones. La respuestas a la gente que duda a donde ir de vacaciones.
    </div>
  </WelcomeAbout>
 </>
  )
}

export default Landing