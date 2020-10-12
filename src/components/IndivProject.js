import React from "react"
import { render } from "@testing-library/react"
import "../stylesheets/Theme.css"

import { LinkOutlined, CodeFilled, CodeTwoTone, FileExcelFilled, StarFilled, StarTwoTone, getTwoToneColor, setTwoToneColor} from "@ant-design/icons"
const individualProject = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '2.7vw'
}

function IndivProject(props) {
    setTwoToneColor('#FAB82A');
    const milestoneColor = getTwoToneColor(); 
    setTwoToneColor('#989BE6');
    const commandColor = getTwoToneColor();
    return (
        <div>
            <div style={individualProject}>
                <div className="project-metadata">
                    <div className="default-header">
                        {props.project.name}
                    </div>

                    <div className="default-desc">
                        <i>
                            {props.project.startDate} - {props.project.endDate}
                        </i>
                    </div>
                </div>
                    <div className = "default-desc">
                        <span style = {props.project.milestone ? {display: 'block'} : {display: 'none'}}>
                            <StarFilled style={{color: '#FAB82A'}}/>
                            {props.project.milestone}
                        </span>
                    
                    </div> 

                {/* <StarTwoTone /> */}

                <div className="default-desc">
                    {props.project.desc}
                    <p>
                    <CodeFilled style={{color: '#6e6ec1', paddingRight: '0.35em'}} />
                        {props.project.technologies}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default IndivProject