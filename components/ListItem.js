import React from 'react'

export default function ListItem(props) {
    return (
        <li className="text-green-900 p-2"><span className="fas-li"><i className="fa fa-check-square pr-2"></i></span>
            {props.text}
        </li>
    )
}
