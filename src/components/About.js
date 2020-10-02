import React from "react";
import "../stylesheets/Theme.css";
import "../stylesheets/About.css";
import portrait_alt from "../assets/portrait.jpg";
import portrait from "../assets/191116.jpg";

function About() {
    return (
        <div className="transition-wrapper">
            <div className="wrapper-about">
                <div className="content-about">
                    <div className="name-and-desc-about">
                        <div className="default-title">
                            About Me
                        </div>
                        <div className="default-desc">
                            Nam ut dui nec ligula sagittis pharetra et sit
                            amet turpis. Cras malesuada, nulla ut convalli
                            maximus, metus mauris tempus elit, ascelerd
                            isque mauris turpis sit amet tortor. Proin effics
                            pretium dolor at finibus. Morbi ultricies posues
                            elit, asceler isque mauris turpis sit amet tortor.
                            Proin effic pretium dolor at finibus. Morbi ultric.
                        </div>

                    </div>

                    <div className="about-image">
                        <img src={portrait} />
                        {/* image */}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About