import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import { Navigation } from '../ui';

export class Transactions extends Component {
  render() {
    return (
      <View>
        <Text>Transactions</Text>
        <Navigation />
      </View>
    );
  }
}
