import React from "react";

function CommentBar() {
    return(
        <section class="comment-bar">
            <input class="comment-input" placeholder="Add a comment... "/>
            <input type="submit" value="Post" class="comment-submit"/>
        </section>
        
        
    )
}

export default CommentBar;