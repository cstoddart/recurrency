import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { BottomNavigation, TopNavigation } from '../ui';

export class Search extends Component {
  render() {
    return (
      <View>
        <TopNavigation />
        <Text>Search</Text>
        <BottomNavigation />
      </View>
    );
  }
}
