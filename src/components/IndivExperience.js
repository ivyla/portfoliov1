import React from "react"
import "../stylesheets/Theme.css"

// const experienceContainer = {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '50%',
//     justifyContent: 'center'

// }
function IndivExperience(props) {
    return (
        // <div style={experienceContainer}>
        <div>
            <div>
                {/* <div className="default-header"> */}
                {props.item.workplace}
            </div >

            <div>
                <div>
                    {props.item.location}
                </div>

                <div>
                    {props.item.date}
                </div>
            </div>

            <div>
                {props.item.description}
            </div>

        </div>
    )
}

export default IndivExperience