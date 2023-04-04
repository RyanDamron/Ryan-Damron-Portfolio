import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Header from './components/Header';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  useEffect(() => {
    document.title = `Ryan Damron's Portfolio`;
  }, []);
  return (

    <Router basename={process.env.PUBLIC_URL}>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>


    </Router>


  );
}

export default App;
