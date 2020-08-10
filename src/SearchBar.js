import React, { useState } from "react";

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('')
    return(
        <div>
            <input 
                type="search" 
                id="site-search" 
                name="query" 
                aria-label="Search 90sgram" 
                placeholder="Search 90sgram" 
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                onClick = {event => event.target.setSelectionRange(0, event.target.value.length)}
            />
               {/* <p>{searchQuery}</p> */} 
            
        </div>
    )
}

export default SearchBar;