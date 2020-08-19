import React from 'react';
import './index.css';

export default function AllImageCard(props) {
    return (
        <section className="all-image-card">
            <h4>{props.name}</h4>
            <img src={props.image}></img>
        </section>
    );
}