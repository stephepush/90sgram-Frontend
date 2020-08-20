import React from 'react';
import AllImage from "./AllImage";
import './index.css';

export default function AllImageCard(props) {
    const eachImage = props.images.map(image => <AllImage image_url={image.image_url} />)
    return (
        <section className="all-image-card" image={props.image}>
            <h4>{props.username}</h4>
            {eachImage}
        </section>
    );
}