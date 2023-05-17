import React from 'react'
import innovation from '../../img/innovation.jpg'

const Innovation = () => {
    return (
        <div className='innovation'>
            <div className="container">
                <div className="innovation-wrapper">
                    <div className="img-block">
                        <img src={innovation} alt="" />
                    </div>
                    <div className="text-block">
                        <div className="line_and_title1">
                            <div className="blue-line"></div>
                            <h3>our capabilites</h3>
                        </div>
                        <h1>INNOVATION</h1>
                        <p>
                           LightSpeed uses thousands of micro satellites
                           scattered  around in low orbit to bring hight-speed 
                           internet anywhere on the planet. This lets  us project 
                           down in a fixed spot on the Earth and drastically reduce 
                           internet bandwidth and latency.
                        </p>
                        <button className="button-explore">LEARN MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Innovation