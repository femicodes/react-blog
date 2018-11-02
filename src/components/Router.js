import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import MainArticle from './MainArticle';

export default class Router extends Component {
    render() {
      return (
        <BrowserRouter>
         <Switch>
              <Route path="/" component={App} exact />
              <Route path="/recipe/:id" component={MainArticle} />
         </Switch>
        </BrowserRouter>
      )
    }
  }