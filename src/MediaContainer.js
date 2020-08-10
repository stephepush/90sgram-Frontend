import React from "react";
import Likes from "./Likes";
import CommentBar from "./CommentBar";
import CommentContainer from "./CommentContainer";
import ImageContainer from "./ImageContainer"

function MediaContainer() {
    return(
        <main>
            <section>
                <ImageContainer />
            </section>
            <section>
                <Likes />
                <CommentBar />
                <CommentContainer />
            </section>
        </main>    
    )
}

export default MediaContainer;