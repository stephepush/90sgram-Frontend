import React from 'react';
import AllImage from "./AllImage";
import './index.css';

export default function AllImageCard(props) {
    //const eachImage = props.images.map(image => <AllImage image_url={image.image_url} />)
    return (
        <section className="all-image-card" /* image={props.image} */ >
            {/*<h4>{props.username}</h4>*/}
            {/*{eachImage}*/}
            <div className="top">
                <p className="all-username">{props.username}</p>
            </div>
            <div className="img-cont">
                <img src={props.image} />
            </div>
            <div className="bottom">
                <p>Likes: {props.likes}</p>
            </div>
        </section>
    );
}