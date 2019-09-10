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
    const { context } = this.props;
    const subscriptions = identifySubscriptions(this.props.context.transactions);
    context.updateContext({ subscriptions });
  }

  render() {
    const { context, history } = this.props;
    const formatNumber = new Intl.NumberFormat('en-us', {
      style: 'currency',
      currency: 'USD',
    });

    return (
      <PageContainer>
        <TopNavigation pageTitle="Subscriptions" />
        <PageContent>
          <SubscriptionList
            data={context.subscriptions}
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
        <BottomNavigation currentPath={history.location.pathname} />
      </PageContainer>
    );
  }
}
