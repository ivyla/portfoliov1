import React from "react"
import { render } from "@testing-library/react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import Experience from "./Experience"
import { Navbar, Nav, NavItem } from 'react-bootstrap/Navbar'
const navItem = {
    textDecoration: 'none',
    paddingLeft: '30px',
    paddingRight: '30px'
}

// Next time - work on getting a normal navbar to work, and then try to use it 
// as a router
// resources:
// https://react-bootstrap.github.io/components/navbar/#navbar-props
// https://stackoverflow.com/questions/48330233/react-router-bootstrap-and-navbar-redirection
// https://github.com/react-bootstrap/react-router-bootstrap
function Navigation() {
    return (
        <div>
            <Navbar bg="dark">
                <nav>
                    <Router>
                        {/* <header> */}
                        <Link style={navItem} to="/">
                            home
                    </Link>
                        <Link style={navItem} to="/about">
                            about
                    </Link>
                        <Link style={navItem} to="/projects">
                            projects
                    </Link>
                        <Link style={navItem} to="/experience">
                            experience
                    </Link>
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

            </Navbar>

        </div>
    )
}
export default Navigation