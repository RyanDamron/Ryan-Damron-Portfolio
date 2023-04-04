import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';

import Header from './components/Header';
// import Footer from './components/Footer';
// import Navigation from './components/Navigation';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
// import Header from './components/Header';
// import background from './images/white-textured.avif.jpeg';
// import Home from './pages/Home'

function App() {
  useEffect(() => {
    document.title = `Ryan Damron's Portfolio`;
  }, []);
  return (

    <Router basename={process.env.PUBLIC_URL}>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path='/home' component={Home} /> */}
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>


    </Router>


  );
}

export default App;
