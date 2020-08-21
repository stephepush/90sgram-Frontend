import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import AllImageCard from "./AllImageCard";
import userData from "./data";
import imageData from "./imageData";

export default function All(){
    /* const cardComponents = userData.map(
        user => 
            <AllImageCard 
                images={user.images}
                username={user.username} 
            />) */
            //.map(component => component.props.images.map (image=> <img key={image.image_id} src={image.image_url} />));
        
        const CardComponents =  imageData.map(
            imageData =>
            <AllImageCard 
                image={imageData.image_url}
                likes={imageData.likes}
                username={imageData.username}
            />
        ) 
                        
    return(
        <section class="all-route">
            {CardComponents} 
        </section>
    )
}