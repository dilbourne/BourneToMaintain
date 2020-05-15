import React from 'react'
import ListItem from './ListItem';

export default function List(props) {
    return (
        <>
        <ul className="list-none">
            { props.items.map((item) => <ListItem text={item} />) }
        </ul>
        </>
    )
}
