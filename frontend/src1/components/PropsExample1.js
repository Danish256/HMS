import React from 'react'

function PropsExample1(props) {
    return (<div>
        <br />
        <img src={props.imgurl} width="250" height="200" alt="Your Image" />
        <h3>{props.name}</h3>
        <p>{props.mobile}</p>
        <p>{props.email}</p>
    </div>)
}
export default PropsExample1