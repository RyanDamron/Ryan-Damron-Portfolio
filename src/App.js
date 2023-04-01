import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';

import Header from './components/Header';
// import Footer from './components/Footer';
// import Navigation from './components/Navigation';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
// import background from './images/white-textured.avif.jpeg';
// import Home from './pages/Home'

function App() {
  useEffect(() => {
    document.title = `Ryan Damron's Portfolio`;
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/ryan-damron-portfolio' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
    // < div style={{backgroundImage: `url(${background})`}}>
    // <BrowserRouter >
    //   <Header />
    //   <Switch>
    //     <Route exact path='/ryan-damron-portfolio' component={Home} />
    //     <Route exact path='/home' component={Home} />
    //     <Route  path='/about' component={About} />
    //     <Route  path='/contact' component={Contact} />
    //   </Switch>
    // </BrowserRouter>
    // </div>
  );
}

export default App;
