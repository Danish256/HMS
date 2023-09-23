import React from 'react'

function PropsExample2(props) {
    return (<div>
        <h3>{props.info} - Child props Example</h3>
        {props.children}
    </div>)
}
export default PropsExample2