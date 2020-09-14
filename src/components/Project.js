import React from "react"
import { render } from "@testing-library/react"
import "../stylesheets/Theme.css"

import { LinkOutlined, CalendarFilled, CodeFilled, FileExcelFilled } from "@ant-design/icons"
// inline stlying for this file to avoid confusing with Projects.css and Projects.js

const projTitle = {
    color: '#F55379',
    fontFamily: "Poppins"
}

const projDate = {
    color: '#888080',
    fontFamily: "Poppins"
}

const projDesc = {
    color: '#888080',
    fontFamily: "Poppins"
}

const projTechnologies = {
    color: '#888080',
    fontFamily: "Poppins"
}

const projHeader = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const individualProject = {
    display: 'flex',
    flexDirection: 'column'
}

function Project(props) {
    return (
        <div>
            <div style={individualProject}>
                {/* Project Name */}
                <div style={projHeader}>
                    {/* <p style={projTitle}> */}
                    <div className="default-header">
                        {props.project.name}

                    </div>
                    <div style={projDate}>
                        {/* <span style={projDate}> */}
                        {props.project.startDate} - {props.project.endDate}
                        {/* </span> */}

                    </div>
                </div>

                <div>
                    <p style={projDesc}> {props.project.desc} </p>
                    <p style={projTechnologies}>
                        <CodeFilled />
                        {props.project.technologies} </p>
                </div>
            </div>

        </div>
    )
}

export default Project