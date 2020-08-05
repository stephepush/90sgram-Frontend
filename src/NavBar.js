import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";

function NavBar(){
    return(
        <nav>
            <Logo />
            <SearchBar />
            <NavLinks />    
        </nav>
    )
}

export default NavBar;