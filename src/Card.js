//writing a function that returns jsx that can be imported
//import react from react
//export function
//write the function
//return jsx
import React from 'react'
import './Card.css';

export default function Card(props){
    return(
        <div className='Card'>
            <button type='button'>delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}
//prop will be passed in for each Card from the list.
