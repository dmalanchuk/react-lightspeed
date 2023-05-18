import React from 'react'
import looking from '../../img/looking.jpg'

const Looking = () => {
    return (
        <div className="looking">
            <div className="container">
                <div className="looking-wrapper">
                    <div className="text-block">
                        <div className="line_and_title2">
                            <div className="blue-line"></div>
                            <h3>our solution</h3>
                        </div>
                        <h1>LOOKING FOR SPEED?</h1>
                        <p>
                            A slow connection that times out or takes minutes
                            for a page to load is almost as bad as no connection at all.
                            Therefore, the LightSpeed has decided to develop a solution that allows you
                            to download anything at a minimum of 150 Mbps and upload at 10 Mbps with no
                            frustration attacher.
                        </p>
                        <button className="button-explore">SHOW ME</button>
                    </div>
                    <div className="img-block">
                        <img src={looking} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Looking