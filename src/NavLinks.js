import React, { useState } from "react";
//import {Link} from "react-router-dom";
import './index.css';

function NavLinks(){
    const [user, setUser] = useState("Login")

    /* useEffect(() => {
        
    }) */

    

    return(

        <ul className="nav-ul">
            <li>Home</li>
            <li>Notifications</li>
            <li onClick={() => setUser(currentUser => currentUser = "Stephen")}>{user}</li>
        </ul>
        
    )
}

export default NavLinks;