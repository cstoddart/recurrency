import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { TopNavigation, BottomNavigation } from '../ui';

export class Transactions extends Component {
  render() {
    return (
      <View>
        <TopNavigation />
        <Text>Transactions</Text>
        <BottomNavigation />
      </View>
    );
  }
}
