import React from "react";

function SearchBar() {
    return(
        <div>
            <input type="search" id="site-search" 
                name="query" 
                aria-label="Search 90sgram" placeholder="Search 90sgram" required>
                
            </input>
        </div>
    )
}

export default SearchBar;