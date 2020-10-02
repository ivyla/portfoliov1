import React from "react"
import { render } from "@testing-library/react"
import "../stylesheets/Theme.css"

import { LinkOutlined, CalendarFilled, CodeFilled, FileExcelFilled, TrophyTwoTone, StarTwoTone } from "@ant-design/icons"
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

const projHeader = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const individualProject = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '2.5vw'
}

const invisible = {
    display: 'none'
}

function IndivProject(props) {
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
                        <i>
                            {props.project.startDate} - {props.project.endDate}

                        </i>
                        {/* <span style={projDate}> */}
                        {/* </span> */}

                    </div>
                </div>

                <div style={invisible}>
                    <StarTwoTone />
                </div>

                <div className="default-desc">
                    <p > {props.project.desc} </p>
                    <p>
                        <CodeFilled />   {props.project.technologies} </p>
                </div>
            </div>

        </div>
    )
}

export default IndivProject