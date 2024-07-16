import React from 'react'
import frame from "../assets/Frame 10381.png"
import icon from "../assets/Icon.png"
import icon2 from "../assets/Icon2.png"

import { FiChevronDown } from "react-icons/fi";
import '../styles/navbar.css'

function Navbar() {
  return (
    <div>
      <div className='navbarContainer'>
        <h2>Your Jobs</h2>
        <div className='navInfo'>
        <div className="date">Wednesday, January 17, 2024</div>
            
            <img src={frame} alt="" style={{ width: "40px", height: "40px" }}/>
            <FiChevronDown/>

        </div>
      </div>

      <div className='headerContainer'>

        <h2>
            Hi, Abhilash
        </h2>

        <div className='buttonContainer'>
        <button><img src={icon} alt="" style={{ width: "20px", height: "20px" }}/>Export</button>
        <button><img src={icon2} alt="" style={{ width: "20px", height: "20px" }}/>Add JD</button>
        </div>

      </div>
    </div>
  )
}

export default Navbar
