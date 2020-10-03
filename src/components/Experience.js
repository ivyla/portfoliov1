import React from "react"
import "../stylesheets/Theme.css"
import "../stylesheets/Experience.css"

import ExperiencesData from "../data/ExperiencesData"
import IndivExperience from "./IndivExperience"


// const experienceContainer = {
//     marginBottom: '45px'
// }

function Experience() {
    const experiences = ExperiencesData.map((item) => <IndivExperience key={item.key} item={item} />)
    return (
        <div className="transition-wrapper">

            <div className="wrapper-experience">
                <div className="experience-content">
                    <div className="default-title">
                        <div className="title-padding-center">
                            <div className="experience-title">
                                Experience

                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    {experiences}
                </div>
            </div>
        </div>
    )
}

export default Experience