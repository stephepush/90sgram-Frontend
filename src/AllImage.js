import React from "react";

export default function AllImage(props) {
    return (
        <React.Fragment>
            <img src={props.image_url}></img>
        </React.Fragment>
    )
}