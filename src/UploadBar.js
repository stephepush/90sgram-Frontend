import React, { useState } from "react";

function UploadBar() {
    const [searchQuery, setSearchQuery] = useState('')
    return(
        <section>
            <input 
                type="search" 
                id="site-search" 
                name="query" 
                aria-label="Upload to 90sgram" 
                placeholder="Upload to 90sgram" 
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                onClick = {event => event.target.setSelectionRange(0, event.target.value.length)}
            />
               {/* <p>{searchQuery}</p> */} 
            
        </section>
    )
}

export default UploadBar;