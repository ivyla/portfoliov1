import React from "react"
import "../stylesheets/Theme.css"
import "../stylesheets/Projects.css"

import ProjectsData from "../data/ProjectsData"
import Project from "./Project"

function Projects() {
    // create a variable that is assigned to map function 
    // insert map function that reads from ./data/ProjectsData directly
    const projects = ProjectsData.map((item) => <Project key={item.key} project={item} />)
    return (
        <div className="wrapper-projects" >
            <div className="default-title-projects">
                Projects
                </div>

            <div>
                {projects}
            </div>
        </div >
    )
}

export default Projects