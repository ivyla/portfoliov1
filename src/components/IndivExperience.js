import React from "react"
import "../stylesheets/Theme.css"
import LocationPin from "../assets/location.svg"

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
    marginBottom: '1em',
    alignItems: 'center'

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

const pinStyle = {
    width: '12px',
    height: '12px',
    marginRight: '5.5px',

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
                    <img src={LocationPin} style={pinStyle} />
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