//writing a function that returns jsx that can be imported
//import react from react
//export function
//write the function
//return jsx

import React from 'react'
import './List.css';
import Card from './Card'

export default function List(props) {

    //take props.cards and convert to a new array of card components
    const cards = props.cards.map((card) => <Card key={card.id} title={card.title} content={card.content} />)

    return (

        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {props.cards.map(card => (
                    <Card
                        key={card.id}
                        title={card.title}
                        content={card.content} />
                ))}
                <button type="button" className="List-add-button">
                    + Add Random Card
                </button>
            </div>
        </section>

    )
}
