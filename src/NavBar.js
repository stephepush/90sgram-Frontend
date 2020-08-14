import React from "react";
import Logo from "./Logo";
import UploadBar from "./SearchBar";
import NavLinks from "./NavLinks";
import './index.css';

function NavBar(){
    return(
        <nav className="nav">
            <Logo />
            <UploadBar className="item-2"/>
            <NavLinks className="item-3"/>    
        </nav>
    )
}

export default NavBar;