import React from 'react';
import logo from './logo.svg';
import Navigation from './components/Navigation';
import { Helmet } from "react-helmet";
// import 'bootstrap/dist/css/bootstrap.min.css';
import favicon from "./assets/favicon.ico"

function App() {
  return (
    <div className="App">
      <Helmet>
        <title> ivyla.me </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href={favicon} />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&display=swap" rel="stylesheet"/>      
      </Helmet>
      <Navigation />
    </div >
  );
}

export default App;
