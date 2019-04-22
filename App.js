import React, { Component } from 'react';
import axios from 'axios';
import { WebView, Text, Switch } from 'react-native';
import {
  NativeRouter,
  Route,
  Redirect,
} from 'react-router-native';

import { context, initialState } from './context';
import { Login } from './components/login';
import { Home } from './components/home';

const RouteWithContext = ({ path, component: Component }) => (
  <Route path={path} render={(props) => (
    <context.Consumer>
      {(context) => (
        context.user.loggedIn && path !== '/login'
          ? <Component context={context} {...props} />
          : <Login context={context} {...props} />
      )}
    </context.Consumer>
  )} />
);

export default class App extends Component {
  state = {
    ...initialState,
    updateContext: (state) => this.setState(state),
  };

  render() {
    return (
      <NativeRouter>
        <context.Provider value={this.state}>
          <RouteWithContext path="/" component={Home} />
          <RouteWithContext path="/login" component={Login} />
        </context.Provider>
      </NativeRouter>
    );
  }
}
