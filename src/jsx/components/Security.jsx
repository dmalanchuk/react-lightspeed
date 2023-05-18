import React from 'react'
import promise from '../../img/security_is.jpg'

const Security = () => {
    return (
        <div className='security'>
            <div className="container">
                <div className="security-wrapper">
                    <div className="img-block">
                        <img src={promise} alt="" />
                    </div>
                    <div className="text-block">
                        <div className="line_and_title3">
                            <div className="blue-line"></div>
                            <h3>our promise</h3>
                        </div>
                        <h1>SECURITY IS IMPORTANT</h1>
                        <p>
                            Cibersecurity risks pervade every organization and aren`t
                            always under the direct control of your IT
                            security team. Increasing global conectivity , usage
                            of could servise, and outsourcing means a much
                            larger attack vector than in the past. Lern more about cyber security.
                        </p>
                        <button className="button-explore">LEARN MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Security


