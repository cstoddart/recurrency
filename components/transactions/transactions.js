import React, { Component } from 'react';

import {
  PageContainer,
  TopNavigation,
  PageContent,
  Card,
  BottomNavigation,
} from '../ui';
import {
  TransactionList,
  TransactionName,
  TransactionAmount,
} from './transactionsStyles';
import MoneyIcon from '../../assets/money.svg';

export const Transactions = (props) => {
  const { transactions } = props.context;
  const formatNumber = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <PageContainer>
      <TopNavigation pageTitle="Transactions" />
      <PageContent>
        <TransactionList
          data={transactions}
          keyExtractor={(transaction, index) => `${transaction.name}${index}`}
          renderItem={({ item: transaction, index }) => (
            <Card index={index}>
              <MoneyIcon width={25} height={25} />
              <TransactionName>{transaction.name}</TransactionName>
              <TransactionAmount>{formatNumber.format(transaction.amount)}</TransactionAmount>
            </Card>
          )}
        />
      </PageContent>
      <BottomNavigation currentPath={props.history.location.pathname} />
    </PageContainer>
  );
};
