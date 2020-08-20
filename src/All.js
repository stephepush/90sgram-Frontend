import React from "react";
import AllImageCard from "./AllImageCard";
import userData from "./data";

export default function All(){
    const cardComponents = userData.map(
        user => 
            <AllImageCard 
                images={user.images}
                username={user.username} 
            />)//.map(component => component.props.images.map (image=> <img key={image.image_id} src={image.image_url} />));

            
    return(
        <section class="all-route">
            {cardComponents} 
        </section>
    )
}