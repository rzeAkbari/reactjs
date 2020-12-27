import React, { useState } from "react";
import "./App.css";
import Navbar from "./common/navbar";
import { Route } from "react-router-dom";
import { HomePage } from "./common/home";
import { Profile } from "./common/profile";
import { Features } from "./common/features";
function App() {
  const [navbar, setnavbar] = useState(["home", "features", "profile"]);
  return (
    <div>
      <Navbar navlist={navbar} />
      <div className="content">
        <Route component={HomePage} exact path="/home" />
        <Route component={Features} exact path="/features" />
        <Route component={Profile} exact path="/profile" />
      </div>
    </div>
  );
}

export default App;
