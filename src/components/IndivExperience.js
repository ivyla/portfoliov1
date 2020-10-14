import React from "react"
import "../stylesheets/Theme.css"
import "../stylesheets/Projects.css"

import LocationPin from "../assets/location.svg"

const pinStyle = {
    width: '0.8rem',
    height: '0.8rem',
    marginRight: '5.5px',
}

const headerCenter = {
    textAlign: 'center'
}
function IndivExperience(props) {
    return (
        <div className="wrapper-indivExperience">
            {/* <div> */}
            <div className="default-header" style={headerCenter}>
                <a href={props.item.link} target="_blank" rel="noopener noreferrer" className="default-header" >
                    {props.item.workplace}
                </a>
            </div >

            <div className="experience-metadata">

                <div className="default-desc">
                    <img src={LocationPin} style={pinStyle} />
                    {props.item.location}
                </div>

                <div className="default-desc">
                    {props.item.date}
                </div>
            </div>

            <div className="default-desc">
                {props.item.description}
            </div>

        </div>
    )
}

export default IndivExperience