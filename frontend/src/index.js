import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import './custom.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './App/routes/Profile';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Route path={"/profile"} component={Profile}>
        </Route>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
