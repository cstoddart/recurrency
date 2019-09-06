import React from 'react';
import { View, Image } from 'react-native';
import { Link } from 'react-router-native';

import Gear from '../../../assets/gear.svg';

export const TopNavigation = () => (
  <View>
    <Link to="/settings"><Gear height="30" width="30" /></Link>
  </View>
);
