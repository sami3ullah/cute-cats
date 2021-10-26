import React from 'react';
import './card.styles.css'

export const Card = props => {
    return(
        <div className="card-container">
            <img alt="scary-cats" className="card-container__image" src={`https://robohash.org/${props.cat.id}?set=set4&size=500x500`} />
            <h2>{props.cat.name}</h2>
            <p>{props.cat.email}</p>
        </div>
    )
}