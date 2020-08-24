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