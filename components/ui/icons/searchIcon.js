import React from 'react';
import {
  Svg,
  Circle,
  Rect,
} from 'react-native-svg';

export const SearchIcon = ({ width, height, color }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 54.73 54.73"
    width={width}
    height={height}
  >
    <Circle
      cx="22"
      cy="22"
      r="20"
      fill="none"
      stroke={color}
      strokeMiterlimit={10}
      strokeWidth="4px"
    />
    <Rect
      x="38.4"
      y="33.31"
      width="8.21"
      height="18.38"
      transform="translate(-17.6 42.5) rotate(-45)"
      fill="none"
      stroke={color}
      strokeMiterlimit={10}
      strokeWidth="4px"
    />
  </Svg>
);
