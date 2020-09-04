import React from "react"
import { render } from "@testing-library/react"
import "../stylesheets/Theme.css"

function Project(props) {
    return (
        <div>
            {/* Project Name */}
            <p>Project name: {props.project.name} </p>
            {/* Project link?  */}
            <p>Project link : </p>

            {/* Active Data */}
            <p>Active Dates: </p>

            {/* Technologies */}
            <p>Technologies : </p>

            {/* Brief project description */}
            <p>Project description: </p>

            <p>-----------------------</p>
        </div>
    )
}

export default Project