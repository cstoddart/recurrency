import React from 'react';
import { View } from 'react-native';
import { Link } from 'react-router-native';

export const Navigation = () => (
  <View>
    <Link to="/subscriptions" />
    <Link to="/transactions" />
    <Link to="/search" />
  </View>
);
