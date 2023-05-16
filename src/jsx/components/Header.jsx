import React from 'react'
import Slite from '../../ico/satellite.png'

const Header = () => {
  return (
    <header className='header'>
      <div className="conatiner">
        <div className="header-wrapper">

          {/* logo and name */}

          <div className="logo_and_name">
            <img src={Slite} alt="" />
            <h1>LIGHTSPEED</h1>
          </div>

          {/* navigation */}

          <nav className="nav-list">
            <li>About</li>
            <li>Solution</li>
            <li>How it works</li>
            <li>Testimonial</li>
            <li>Investors</li>
            <li>Contact</li>
          </nav>

          {/* button */}

          <button className='button_sing-up'>Sing Up</button>
        </div>

        {/* content-header */}

        <div className="header-content">
          <h1></h1>
          <p></p>
          <button className=''>Get Started</button>
        </div>
      </div>
    </header>
  )
}

export default Header