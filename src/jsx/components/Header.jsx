import React from 'react'
import Slite from '../../ico/satellite.png'
import Dashboard from '../../ico/dashboard.png'
import Globe from '../../ico/globe.png'
import Like from '../../ico/thumb-up.png'

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
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
          <h1>INTERNET FROM SPACE</h1>
          <p>LightSpeed is developing innovate soution to provide
            low-cost hight-speed internet to everywhere in the world,
            even for the most  remote  and  secluded location
          </p>
          <button className="button-get">Get Started</button>
        </div>

        {/* header-blocks */}

        <div className="header-blocks">
          <div className="amazing-speed">
            <img src={Dashboard} alt="" />
            <h2>AMAZING SPEED</h2>
            <h1>300<span>/mbps</span></h1>
            <p>Download speed</p>
          </div>
          <div className="approved">
            <img src={Like} alt="" />
            <h2>APPROVED</h2>
            <h1>4.9</h1>
            <p>Customrs` rating</p>
          </div>
          <div className="coverage">
            <img src={Globe} alt="" />
            <h2>COVERAGE</h2>
            <h1>195</h1>
            <p>Internet in every country</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header