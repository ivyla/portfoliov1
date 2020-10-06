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

import { CSSTransition, TransitionGroup } from "react-transition-group"
import logo from "../assets/logo-main.png"
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

                            <NavLink className="navItem" id="icon-styling" to="/">
                                <b> il </b>
                            </NavLink>
                            <NavLink className="navItem" to="/">
                                <b>home </b>
                            </NavLink>
                            <NavLink className="navItem" to="/about">
                                <b>about</b>
                            </NavLink>
                            <NavLink className="navItem" to="/projects">
                                <b>projects</b>
                            </NavLink>
                            <NavLink className="navItem" to="/experience">
                                <b> experience </b>
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
                    <Route render={({ location }) => (
                        < TransitionGroup >
                            <CSSTransition
                                key={location.key}
                                timeout={500}
                                classNames="fade">
                                <Switch location={location}>
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

                            </CSSTransition>

                        </TransitionGroup>
                    )}>

                    </Route>
                </Router >
            </div >
        )

    }
}
export default Navigation