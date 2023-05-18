import React from 'react'
import oneuser from '../../img/one-user.jpg'
import twouser from '../../img/two-user.jpg'
import threeuser from '../../img/three-user.jpg'

const Usedin = () => {
    return (
        <div className="used">
            <div className="container">
                <div class="user-wrapper">
                    <div className="text-user">
                        <h1>USED BY THOUSANDS OF HAPPY CUSTOMERS</h1>
                        <p>
                            These are the stories of our customers who have joined us with
                            great pleasure when using our innovative solution.
                        </p>
                    </div>
                    <div className="user-block-content">
                        <div class="one-user">
                            <div class="img-title">
                                <img src={oneuser} alt="" />
                                <div class="title-paragtaphe">
                                    <h2>Victoria 5</h2>
                                    <p>Tahiti, French Polynesla</p>
                                </div>
                            </div>
                            <p class="p">"Wow.... I am very happy to use this internet provider,
                                it turned out to be more than my expectations and so far there have
                                been no problems."</p>
                        </div>
                        <div class="two-user">
                            <div class="img-title">
                                <img src={twouser} alt="" />
                                <div class="title-paragtaphe">
                                    <h2>Tatiana L</h2>
                                    <p>Cook islands</p>
                                </div>
                            </div>
                            <p class="p">"I love this because I lke to travel far and
                                still can connect with hight speed."</p>
                        </div>
                        <div class="three-user">
                            <div class="img-title">
                                <img src={threeuser} alt="" />
                                <div class="title-paragtaphe">
                                    <h2>Lisa N</h2>
                                    <p>Samoa</p>
                                </div>
                            </div>
                            <p class="p">"This is very useful for my business that currently requires a hight-speed
                                network that has high security."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Usedin