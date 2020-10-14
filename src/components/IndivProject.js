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

    const parsedDescText = props.project.desc.split("\n").map((item, i) => {
        return <div key={i}>{item} </div>;
    });

    const projectLinks = props.project.links.map((link, index)=> 
    <a href={link.link} target="_blank" rel="noopener noreferrer" className="linkStyling"> 
    <span className="linkText">
        {link.name}

    </span>
        {index != props.project.links.length - 1 ? ' | '  : ' '}
    </a>)
    return (
        <div>
            <div style={individualProject}>
                <div className="project-metadata">
                    <div className="default-header">
                        {props.project.name}
                    </div>

                    <div className="default-desc">
                        <i>
                            {props.project.startDate} {props.project.endDate ?  '-' : ' ' } {props.project.endDate}
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
                    {parsedDescText}
                    <p>
                    <CodeFilled style={{color: 'rgb(125 125 158)', paddingRight: '0.35em'}} />
                        {props.project.technologies}
                    </p>
                <div style={props.project.links === undefined || props.project.links.length == 0 ? {display: 'none'} : {display: 'block'}}>
                    {projectLinks}
                </div>
                </div>

            </div>

        </div>
    )
}

export default IndivProject