import React, { Component, useState } from 'react';

import { colors } from '../../constants';
import {
  PageContainer,
  TopNavigation,
  PageContent,
  Card,
  BottomNavigation,
} from '../ui';
import {
  SearchInputContainer,
  SearchInput,
  SearchResultList,
  SearchResultName,
  SearchResultAmount,
} from './searchStyles';
import MoneyIcon from '../../assets/money.svg';
import XIcon from '../../assets/x.svg';

const { orange } = colors;

export const Search = (props) => {
  const { transactions } = props.context;
  const [query, setQuery] = useState('');
  const formatNumber = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
  });
  const searchResults = transactions.filter((transaction) => (
    transaction.name.toLowerCase().includes(query.toLowerCase())
  ));
  return (
    <PageContainer>
      <TopNavigation pageTitle="Search" currentPath={props.history.location.pathname} />
      <SearchInputContainer>
        <SearchInput
          onChange={({ nativeEvent: { text } }) => setQuery(text)}
          value={query}
          selectionColor={orange}
        />
        <XIcon width={15} height={15} onPress={() => setQuery('')} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} />
      </SearchInputContainer>
      <PageContent>
        <SearchResultList
          data={searchResults}
          keyExtractor={(transaction, index) => `${transaction.name}${index}`}
          renderItem={({ item: transaction, index }) => (
            <Card>
              <MoneyIcon width={25} height={25} />
              <SearchResultName>{transaction.name}</SearchResultName>
              <SearchResultAmount>{formatNumber.format(transaction.amount)}</SearchResultAmount>
            </Card>
          )}
        />
      </PageContent>
      <BottomNavigation currentPath={props.history.location.pathname} />
    </PageContainer>
  );
};
