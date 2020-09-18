import React from "react"
import "../stylesheets/Theme.css"
// const experienceContainer = {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '50%',
//     justifyContent: 'center'

// }
const title = {
    fontFamily: 'Playfair-Display'
}
const details = {
    color: '#888080',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'Poppins',
    marginTop: '1em',
    marginBottom: '1em'

}

const desc = {
    color: '#888080',
    fontFamily: 'Poppins'
}

const wrapper = {
    marginBottom: '2.5vw'
}

const spacing = {
    marginBottom: '30px'
}
function IndivExperience(props) {
    return (
        <div style={wrapper}>
            {/* <div> */}
            <div className="default-header">
                {props.item.workplace}
            </div >

            <div style={details}>
                <div>
                    {props.item.location}
                </div>

                <div>
                    {props.item.date}
                </div>
            </div>

            <div style={desc}>
                {props.item.description}
            </div>

        </div>
    )
}

export default IndivExperience