import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import { Navigation } from '../ui';
import { identifySubscriptions } from '../../operations';

export class Subscriptions extends Component {
  componentDidMount() {
    const subscriptions = identifySubscriptions(this.props.context.transactions);
    this.props.context.updateContext({ subscriptions });
  }

  render() {
    const { subscriptions } = this.props.context;
    return (
      <View>
        <Text>Subscriptions</Text>
        {subscriptions.map((subscription) => (
          <Text key={subscription.name}>{subscription.name}</Text>
        ))}
        <Navigation />
      </View>
    );
  }
}
