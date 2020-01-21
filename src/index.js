import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Auth from './components/Login/auth.js';

//
import Management from './components/Management/management';
import Home from './components/Home/home'
import Dashboard from './components/Dashboard/dashboard'



ReactDOM.render(
  <BrowserRouter>
    <Route path='/' exact component={Home} />
    <Route path='/auth' exact component={Auth} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/management' component={Management} />
  </BrowserRouter>
  ,document.getElementById('root'));
