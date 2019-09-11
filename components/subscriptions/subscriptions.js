import React, { Component } from 'react';

import {
  PageContainer,
  TopNavigation,
  PageContent,
  Card,
  BottomNavigation,
  Flex,
  Text,
} from '../ui';
import {
  SubscriptionList,
  SubscriptionName,
  SubscriptionAmount,
  SubscriptionInterval,
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
        <TopNavigation pageTitle="Subscriptions" currentPath={history.location.pathname} />
        <PageContent>
          <SubscriptionList
            data={context.subscriptions}
            keyExtractor={(subscription) => subscription.name}
            renderItem={({ item: subscription, index }) => (
              <Card>
                <MoneyIcon width={25} height={25} />
                <SubscriptionName>{subscription.name}</SubscriptionName>
                <Flex align="flex-end" column>
                  <SubscriptionAmount>{formatNumber.format(subscription.amount)}</SubscriptionAmount>
                  <SubscriptionInterval>30 Days</SubscriptionInterval>
                </Flex>
              </Card>
            )}
          />
        </PageContent>
        <BottomNavigation currentPath={history.location.pathname} />
      </PageContainer>
    );
  }
}
