import React from "react"
import { render } from "@testing-library/react"
import "../stylesheets/Theme.css"

import { LinkOutlined, CalendarFilled, CodeFilled, FileExcelFilled, TrophyTwoTone, StarTwoTone } from "@ant-design/icons"
const individualProject = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '2.5vw'
}


function IndivProject(props) {
    return (
        <div>
            <div style={individualProject}>
                {/* Project Name */}
                <div className="project-metadata">
                    {/* project title */}
                    <div className="default-header">
                        {props.project.name}

                    </div>

                    {/* project date */}
                    <div className="default-desc">
                        <i>
                            {props.project.startDate} - {props.project.endDate}

                        </i>
                        {/* <span style={projDate}> */}
                        {/* </span> */}

                    </div>
                </div>

                {/* <StarTwoTone /> */}

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