import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../components/styles/FontStyles.css';
import './styles/AboutStyles.css';

import Carousel from './Carousel'
import About from './About';
import Contact from './Contact';

export default function Home() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path='/' component={Carousel} />
                <Route  path='/about' component={About}/>
                <Route eact path='/contact' component={Contact} />
            </Switch>
        </Router>
        )
    };
   

