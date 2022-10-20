import "./App.css";
import Home from "./pages";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/resume" component={Home} exact />
            </Switch>
        </Router>
    );
}

export default App;
