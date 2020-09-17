import React from "react"
import "../stylesheets/Theme.css"
import "../stylesheets/Experience.css"

import ExperiencesData from "../data/ExperiencesData"
import IndivExperience from "./IndivExperience"



function Experience() {
    const experiences = ExperiencesData.map((item) => <IndivExperience key={item.key} item={item} />)
    return (
        <div className="wrapper-experiences">
            <div>
                <h1> Experience </h1>
            </div>

            <div>
                {experiences}
            </div>
        </div>
    )
}

export default Experience