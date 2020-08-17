import React, { useState } from "react";
import './App.css';
import {Link, Switch, Route} from "react-router-dom";


import User from "./User";
//import NavBar from "./NavBar"
import RouteContainer from "./RouteContainer";

import './index.css';


function App() {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <div>
      <nav className="nav">
        <h1 className="item-1">90sGram</h1>
          {/*<UploadBar className="item-2"/>*/}
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
          {/* <NavLinks className="item-3"/>     */}
        <section className="nav-ul">
            <Link to="/image">Home</Link>
            &nbsp
            <Link to="/user">UserHome</Link>

            {/* <Switch>
                <Route exact path="/user" render={() => <User />} />
            </Switch> */}
        </section>
      </nav>
      {/*<NavBar />*/}
      <main className="route-container">
        <RouteContainer />
      </main>
    </div>
  );
}

export default App;
