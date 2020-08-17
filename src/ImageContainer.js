import React from "react";
import Likes from "./Likes";
import CommentBar from "./CommentBar";
import CommentContainer from "./CommentContainer";
import './index.css';
import styled from 'styled-components';

const Section = styled.section`
display: grid;

grid-template-rows: 1fr 4fr 1fr;
height: 600px;
`


export default function ImageContainer(props) {

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