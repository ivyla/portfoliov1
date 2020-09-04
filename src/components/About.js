import React from "react";
import "../stylesheets/Theme.css";
import "../stylesheets/About.css";
import portrait from "../assets/portrait.jpg"
function About() {
    return (
        <div className="wrapper-about">
            <div className="content-about">
                <div className="name-and-desc-about">
                    <p className="default-title"> About Me </p>
                    <p className="default-description-about"> Nam ut dui nec ligula sagittis pharetra et sit
                    amet turpis. Cras malesuada, nulla ut convalli
                    maximus, metus mauris tempus elit, ascelerd
                    isque mauris turpis sit amet tortor. Proin effics
                    pretium dolor at finibus. Morbi ultricies posues
                    elit, asceler isque mauris turpis sit amet tortor.
                    Proin effic pretium dolor at finibus. Morbi ultric.
                </p>

                </div>

                <div className="about-image">
                    <img src={portrait} />
                    {/* image */}
                </div>

            </div>
        </div>
    )
}

export default About