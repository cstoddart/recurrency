import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import { Navigation } from '../ui';

export class Search extends Component {
  render() {
    return (
      <View>
        <Text>Search</Text>
        <Navigation />
      </View>
    );
  }
}
