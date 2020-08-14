import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../pages/home';
import About from '../pages/about';
import Login from "../pages/login";

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" component={Home}/>
            <Route path="/about" component={About}/>
        </div>
    </Router>
)

export default Routes;