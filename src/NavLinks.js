import React, { useState } from "react";
import {Link, Switch, Route} from "react-router-dom";
import User from "./User";
import './index.css';

function NavLinks(){
    //const [user, setUser] = useState("Login")

    /* useEffect(() => {
        
    }) */

    

    return(

        <section className="nav-ul">
            <Link>Home</Link>
            &nbsp
            <Link to="/user">UserHome</Link>

            <Switch>
                <Route exact path="/user" render={() => <User />} />
            </Switch>
        </section>
        
    )
}

export default NavLinks;