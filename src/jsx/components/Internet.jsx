import React from 'react'
import Internets from '../../img/internet.jpg'

const Internet = () => {
    return (
        <div className='internet'>
            <div className="container">
                <div className="internet-wrapper">
                    <div className="text-block">
                        <div className="line_and_title">
                            <div className="blue-line"></div>
                            <h3>our mission</h3>
                        </div>
                        <h1>INTERNET ON A REMOTE ISLAND?</h1>
                        <p>
                            With the pandemic still affecting people and encouraging
                            remote work, people with spotty internet  connections
                            working from a beach or secluded island can now enjoy
                            reliable  hight-speed internet while still eascaping life
                            in a busy town.
                        </p>
                        <button className="button-explore">EXPLORE</button>
                    </div>
                    <div className="img-block">
                        <img src={Internets} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Internet