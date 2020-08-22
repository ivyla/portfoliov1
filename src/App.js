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

function App() {
  return (
    <div className="App">
      <Router>
        {/* <header> */}
        <Link to="/home">
          home
          </Link>
        <Link to="/about">
          about
          </Link>
        <Link to="/projects">
          projects
          </Link>
        <Link to="/experience">
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
    </div >
  );
}

export default App;
