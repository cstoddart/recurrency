import React from 'react';
import {
  Svg,
  G,
  Rect,
  Circle,
  Path,
} from 'react-native-svg';

export const TransactionsIcon = ({ width, height, color }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 65 48"
    width={width}
    height={height}
  >
    <G>
      <Rect
        x="2"
        y="2"
        width="61"
        height="44"
        rx="5"
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth="4px"
      />
      <G>
        <Circle
          cx="25"
          cy="24"
          r="10"
          fill="none"
          stroke={color}
          strokeMiterlimit={10}
          strokeWidth="4px"
        />
        <Path
          d="M39,12a12,12,0,0,0-9.72,5H33v2H28.11c-.15.33-.29.66-.41,1H33v2H27.18c-.05.33-.1.66-.13,1H33v2H27.05c0,.34.08.67.13,1H33v2H27.7c.12.34.26.67.41,1H33v2H29.28A12,12,0,1,0,39,12Z"
          fill={color}
        />
      </G>
    </G>
  </Svg>
);
