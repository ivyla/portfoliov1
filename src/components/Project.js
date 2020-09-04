import React from "react"
import { render } from "@testing-library/react"
import "../stylesheets/Theme.css"
import "../stylesheets/Projects.css"

import { LinkOutlined } from "@ant-design/icons"

function Project(props) {
    return (
        <div>
            <div className="project-content">
                {/* Project Name */}
                <div className="default-header"> {props.project.name}
                    {/* Project link?  */}
                    {/* <a href={props.project.link} target="_blank" rel="noopener noreferrer" > <LinkOutlined /> </a> */}

                    {/* Active Data */}
                    {props.project.startDate} - {props.project.endDate}
                </div>

                {/* Technologies */}
                <p>Technologies: {props.project.technologies} </p>

                {/* Brief project description */}
                <p> {props.project.desc} </p>
            </div>

        </div>
    )
}

export default Project