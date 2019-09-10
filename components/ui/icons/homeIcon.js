import React from 'react';
import {
  Svg,
  Path,
} from 'react-native-svg';

export const HomeIcon = ({ width, height, color }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 55.88 55.83"
    width={width}
    height={height}
  >
    <Path
      d="M46.94,53.83h-15v-14h-8v14h-15v-24H2.75a.75.75,0,0,1-.53-1.28L27.94,2.83,53.66,28.55a.75.75,0,0,1-.53,1.28H46.94Z"
      fill="none"
      stroke={color}
      strokeMiterlimit={10}
      strokeWidth="4px"
    />
  </Svg>
);
