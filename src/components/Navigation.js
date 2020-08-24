import React from "react"
import { render } from "@testing-library/react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import Experience from "./Experience"
import "../stylesheets/Navigation.css"
import { Navbar, Nav, Container } from "react-bootstrap";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Next time - work on getting a normal navbar to work, and then try to use it 
// as a router
// resources:
// https://react-bootstrap.github.io/components/navbar/#navbar-props
// https://stackoverflow.com/questions/48330233/react-router-bootstrap-and-navbar-redirection
// https://github.com/react-bootstrap/react-router-bootstrap
function Navigation() {
    return (
        <div className="navbar">
            <div className="navbar-content">
                <nav>
                    <Router>
                        {/* <header> */}
                        <NavLink className="navItem" to="/">
                            home
                    </NavLink>
                        <NavLink className="navItem" to="/about">
                            about
                    </NavLink>
                        <NavLink className="navItem" to="/projects">
                            projects
                    </NavLink>
                        <NavLink className="navItem" to="/experience">
                            experience
                    </NavLink>
                        {/* </header> */}
                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/projects">
                                <Projects />
                            </Route>
                            <Route path="/experience">
                                <Experience />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </Router>
                </nav>
            </div>
        </div>
    )
}
export default Navigation