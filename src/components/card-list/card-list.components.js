// this component is responsible for the rendering of all the cards 
import React from 'react';
import './card-list.styles.css'
import { Card } from '../card/card.components';

export const CardList = props => {
    
    return <div className="card-list">
        {props.cats.map(cat => (
            // <h1 key={cat.key}>{cat.name}</h1>
            <Card key={cat.id} cat={cat} />
        ))}
    </div>
}