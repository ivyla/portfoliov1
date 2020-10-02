import React from "react"
import "../stylesheets/Theme.css"
import "../stylesheets/Projects.css"

import ProjectsData from "../data/ProjectsData"
import IndivProject from "./IndivProject"

function Projects() {
    // create a variable that is assigned to map function 
    // insert map function that reads from ./data/ProjectsData directly
    const projects = ProjectsData.map((item) => <IndivProject key={item.key} project={item} />)
    return (
        <div className="transition-wrapper">

            <div className="wrapper-projects" >
                <div className="content-projects">
                    <div className="default-title">
                        <div className="project-title">
                            Projects

                        </div>
                    </div>

                    <div>
                        {projects}
                    </div>

                </div>
            </div >

        </div>
    )
}

export default Projects