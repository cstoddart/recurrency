import React, { Component } from 'react';
import { View } from 'react-native';
import { format, isToday, isYesterday } from 'date-fns';

import {
  PageContainer,
  TopNavigation,
  PageContent,
  Card,
  BottomNavigation,
} from '../ui';
import {
  TransactionList,
  TransactionDate,
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
      <TopNavigation pageTitle="Transactions" currentPath={props.history.location.pathname} />
      <PageContent>
        <TransactionList
          data={transactions}
          keyExtractor={(transaction, index) => `${transaction.name}${index}`}
          renderItem={({ item: transaction, index }) => (
            <View>
              {(!transactions[index - 1] || transaction.date !== transactions[index - 1].date) && 
                <TransactionDate>
                  {isToday(transaction.date) ? 
                    `Today, ${format(transaction.date, 'MMM Do')}` 
                  : isYesterday(transaction.date) ? 
                    `Yesterday, ${format(transaction.date, 'MMM Do')}`
                  : format(transaction.date, 'dddd, MMM Do')}
                </TransactionDate>
              }
              <Card>
                <MoneyIcon width={25} height={25} />
                <TransactionName>{transaction.name}</TransactionName>
                <TransactionAmount>{formatNumber.format(transaction.amount)}</TransactionAmount>
              </Card>
            </View>
          )}
        />
      </PageContent>
      <BottomNavigation currentPath={props.history.location.pathname} />
    </PageContainer>
  );
};
