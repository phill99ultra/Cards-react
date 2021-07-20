import React from 'react';
import './card.style.css';

export const Card = props => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.character.id}?set=set2&size=180x180`} alt="character"/>
            <h2>{props.character.name}</h2>
            <p>{props.character.email}</p>
        </div>
    )
}