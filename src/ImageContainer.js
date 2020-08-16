import React from "react";
import Likes from "./Likes";
import CommentBar from "./CommentBar";
import CommentContainer from "./CommentContainer";
import './index.css';


export default function ImageContainer() {

    return(
    <main className="image-container">
        <section className="image-route">
            <img src="https://media.giphy.com/media/12m3hgKuSuhClW/giphy.gif" alt="Wolverine from a capcom game"></img>
        </section>
        <section>
            <Likes />
            
            <CommentContainer />
        </section>
    </main>
    )
}