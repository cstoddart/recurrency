import React, { Component } from 'react';

import {
  PageContainer,
  TopNavigation,
  PageContent,
  Card,
  BottomNavigation,
} from '../ui';
import {
  SubscriptionList,
  SubscriptionName,
  SubscriptionAmount,
} from './subscriptionsStyles';
import { identifySubscriptions } from '../../operations';
import MoneyIcon from '../../assets/money.svg';

export class Subscriptions extends Component {
  componentDidMount() {
    const subscriptions = identifySubscriptions(this.props.context.transactions);
    this.props.context.updateContext({ subscriptions });
  }

  render() {
    const { subscriptions } = this.props.context;
    const formatNumber = new Intl.NumberFormat('en-us', {
      style: 'currency',
      currency: 'USD',
    });
    return (
      <PageContainer>
        <TopNavigation pageTitle="Subscriptions" />
        <PageContent>
          <SubscriptionList
            data={subscriptions}
            keyExtractor={(subscription) => subscription.name}
            renderItem={({ item: subscription, index }) => (
              <Card index={index}>
                <MoneyIcon width={25} height={25} />
                <SubscriptionName>{subscription.name}</SubscriptionName>
                <SubscriptionAmount>{formatNumber.format(subscription.amount)}</SubscriptionAmount>
              </Card>
            )}
          />
        </PageContent>
        <BottomNavigation />
      </PageContainer>
    );
  }
}
