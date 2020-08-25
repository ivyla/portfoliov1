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
import { MenuOutlined } from '@ant-design/icons'

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Next time - work on getting a normal navbar to work, and then try to use it 
// as a router
// resources:
// https://react-bootstrap.github.io/components/navbar/#navbar-props
// https://stackoverflow.com/questions/48330233/react-router-bootstrap-and-navbar-redirection
// https://github.com/react-bootstrap/react-router-bootstrap
class Navigation extends React.Component {
    constructor() {
        super()
        this.state = {
            menuPressed: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({ menuPressed: !prevState.menuPressed }))
        console.log("clicked!" + this.state.menuPressed);
    }

    render() {
        return (
            <div>
                <Router>

                    {/* <div className="navbar"> */}
                    <div className={this.state.menuPressed ? "navbar-large" : "navbar"}>
                        {/* <div className="navbar-content"> */}
                        <div className={this.state.menuPressed ? "navbar-content-mobile" : "navbar-content"}>
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
                        </div>

                        <div className="hamburgermenu">
                            <a href="#" onClick={this.handleClick}>
                                <MenuOutlined style={{
                                    color: 'white',
                                    float: 'right',
                                    fontSize: '20px'
                                }} />
                            </a>

                        </div>
                    </div>
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
                </Router >
            </div>
        )

    }
}
export default Navigation