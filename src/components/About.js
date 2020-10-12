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
                            <div className="title-padding-center">
                                About Me

                        </div>
                        </div>
                        <div className="default-desc">
                        From tweaking the HTML in my old MySpace profiles to tirelessly studying
                         algorithms and computer systems in college, I've always been fascinated with 
                         technology and how it works behind the scenes. Currently, I'm seeking software 
                         engineering roles, focusing on growing my Javascript skills, and dabbling in user 
                         interface design! Aside from web development, I also love learning about computer
                          networks, computer graphics, user experience design, and animation.
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