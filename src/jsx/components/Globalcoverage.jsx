import React from 'react'
import global from '../../img/global.png'

const Globalcoverage = () => {
    return (
        <div className='global_coverage'>
            <div className="container">
                <div className="global-wrapper">
                    <h1>GLOBAL COVERAGE</h1>
                    <p>
                        Lightspeed provides internet solutions with excellent
                        speeds around the whole globe. Power your home or
                        enterprise with connectivity in more 190 countries.
                    </p>
                    <div className="img-block">
                        <img src={global} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Globalcoverage