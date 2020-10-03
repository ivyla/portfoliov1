import React from "react"
import "../stylesheets/Theme.css"
import "../stylesheets/Projects.css"

import LocationPin from "../assets/location.svg"

const pinStyle = {
    width: '12px',
    height: '12px',
    marginRight: '5.5px',
}

const headerCenter = {
    textAlign: 'center'
}
function IndivExperience(props) {
    return (
        <div className="wrapper-indivExperience">
            {/* <div> */}
            <div className="default-header">
                <div style={headerCenter}>
                    {props.item.workplace}

                </div>
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