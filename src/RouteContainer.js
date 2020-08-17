import React from "react";
import Likes from "./Likes";
import CommentBar from "./CommentBar";
import CommentContainer from "./CommentContainer";
import ImageContainer from "./ImageContainer";
import { Switch, Route } from "react-router-dom";
import User from "./User";


import './index.css';

function RouteContainer() {
    return(
        <React.Fragment>
            
            {/* <ImageContainer /> */}
            <Switch>
                <Route exact path="/user" render={() => <User />} />
                <Route path="/image" render={() => <ImageContainer />} />
            </Switch>
           
        </React.Fragment>    
    )
}

export default RouteContainer;