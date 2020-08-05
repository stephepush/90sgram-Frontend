import React from "react";
import Likes from "./Likes";
import CommentBar from "./CommentBar";
import CommentContainer from "./CommentContainer";

function MediaContainer() {
    return(
        <main>
            <Likes />
            <CommentBar />
            <CommentContainer />
        </main>
    )
}

export default MediaContainer;