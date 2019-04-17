import React, { Component } from 'react';
import { View, Text } from 'react-native';

import context from '../../context';
import {
  Logo,
} from '../ui';
import {
  StyledHome,
  HomeText,
} from './homeStyles';

export class Home extends Component {
  render() {
    console.log('CONTEXT', this.context);
    return (
      <StyledHome>
        <Logo />
      </StyledHome>
    );
  }
}