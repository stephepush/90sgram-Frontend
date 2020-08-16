import React from "react";
import Likes from "./Likes";
import CommentBar from "./CommentBar";
import CommentContainer from "./CommentContainer";
import ImageContainer from "./ImageContainer";
import './index.css';

function MediaContainer() {
    return(
        <main className="media-container">
            
                <ImageContainer />
           
        </main>    
    )
}

export default MediaContainer;