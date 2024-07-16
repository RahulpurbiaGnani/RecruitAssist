import React from 'react'
import logo from "../assets/logo.png"
import layout from "../assets/layout.png"
import dotpoints from "../assets/dotpoints-01.png"
import settings from "../assets/settings.png"
import logout from "../assets/Group.png"

import '../styles/sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar_container'>
      

        <div className="logoContainer">
          <img
            src={logo}
            alt=""
            className="logo"
            style={{ width: "27px", height: "41px" , marginLeft: "10px"}}
          />
        
        </div>
       <div className='top_bottom_container'> 
       <div className="contentsContainer">
          <ul>
            <li>
              <img
                src={layout}
                alt="dashboard"
                style={{ width: "27px", height: "27px" }}
              />{" "}
            </li>

            <li>
              <img
                src={dotpoints}
                alt="about"
                style={{ width: "27px", height: "27px" }}
              />{" "}
            </li>

          
          </ul>
        </div>

        <div className="bottomContainer">
          <ul>
            <li>
              <img
                src={settings}
                alt="dashboard"
                style={{ width: "27px", height: "27px" }}
              />{" "}
            </li>

            <li>
              <img
                src={logout}
                alt="about"
                style={{ width: "27px", height: "27px" }}
              />{" "}
            </li>

          
          </ul>
        </div>
       </div>

      </div>

    

  )
}

export default Sidebar
