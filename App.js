import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import {
  NativeRouter,
  Route,
  Switch,
} from 'react-router-native';
import 'intl';
import 'intl/locale-data/jsonp/en';

import { context, initialState } from './context';
import { Login } from './components/login';
import { Home } from './components/home';
import { Subscriptions } from './components/subscriptions';
import { Transactions } from './components/transactions';
import { Search } from './components/search';
import { Settings } from './components/settings';

/* -- Needed to supress annoying warning -- */
YellowBox.ignoreWarnings(['Setting a timer']);
const consoleClone = { ...console };
console.warn = (message) => {
  if (message.indexOf('Setting a timer') <= -1) {
    consoleClone.warn(message);
  }
};
/* ---- */

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
          <Switch>
            <RouteWithContext exact path="/" component={Home} />
            <RouteWithContext path="/login" component={Login} />
            <RouteWithContext path="/subscriptions" component={Subscriptions} />
            <RouteWithContext path="/transactions" component={Transactions} />
            <RouteWithContext path="/search" component={Search} />
            <RouteWithContext path="/settings" component={Settings} />
          </Switch>
        </context.Provider>
      </NativeRouter>
    );
  }
}
