import React from 'react'
import Slite from '../../ico/satellite.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <img src={Slite} alt="" />
                    <h1>LIGHTSPEED</h1>
                    <p>LightSpeed is a  satellite internet constellation
                        providing satellite internet acceses.
                    </p>
                </div>

                {/* footer */}

                <footer className="main-footer">
                    <div className="block_about">
                        <h3>About</h3>
                        <ul footer-list>
                            <li>Solution</li>
                            <li>How it works</li>
                            <li>Testimonials</li>
                            <li>Careers</li>
                            <li>Value</li>
                            <li>Privacy & Legal</li>
                            <li>News</li>
                        </ul>
                    </div>
                    <div className="block_solution">
                        <h3>Solution</h3>
                        <ul footer-list>
                            <li>Individuals</li>
                            <li>Businesses</li>
                            <li>Non-profit</li>
                        </ul>
                    </div>
                    <div className="block_investors">
                        <h3>Investors</h3>
                        <ul footer-list>
                            <li>Investors profile</li>
                            <li>Reports</li>
                            <li>Stock information</li>
                            <li>Stockholder Service</li>
                            <li>Corporate Govermance</li>
                            <li>Resources</li>
                        </ul>
                    </div>
                    <div className="block_contact">
                        <h3>Contact</h3>
                        <ul footer-list>
                            <li>Phone</li>
                            <li>E-mail</li>
                            <li>Pinterest</li>
                            <li>Facebook</li>
                            <li>Telegram</li>
                            <li>GitHub</li>
                        </ul>
                    </div>
                    <div className="block_button">
                        <button className="button_sing-up">Sing Up</button>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer