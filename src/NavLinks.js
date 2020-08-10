import React, { useState } from "react";

function NavLinks(){
    const [user, setUser] = useState("Login")

    /* useEffect(() => {
        
    }) */

    

    return(

        <ul>
            <li>Home</li>
            <li>Notifications</li>
            <li onClick={() => setUser(currentUser => currentUser = "Stephen")}>{user}</li>
            
        </ul>
        
    )
}

export default NavLinks;