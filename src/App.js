import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const navItem = {
  textDecoration: 'none',
  paddingLeft: '30px',
  paddingRight: '30px'
}

function App() {
  return (
    <div className="App">
      <nav>
        <Router>
          {/* <header> */}
          <Link style={navItem} to="/home">
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
    </div >
  );
}

export default App;
