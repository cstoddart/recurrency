import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import {
  BottomNavigation,
  TopNavigation,
  PageContainer,
} from '../ui';
import { identifySubscriptions } from '../../operations';

export class Subscriptions extends Component {
  componentDidMount() {
    const subscriptions = identifySubscriptions(this.props.context.transactions);
    this.props.context.updateContext({ subscriptions });
  }

  render() {
    const { subscriptions } = this.props.context;
    return (
      <PageContainer>
        <TopNavigation />
        <Text>Subscriptions</Text>
        {subscriptions.map((subscription) => (
          <Text key={subscription.name}>{subscription.name}</Text>
        ))}
        <BottomNavigation />
      </PageContainer>
    );
  }
}
