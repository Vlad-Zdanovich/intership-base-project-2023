import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

import { TBaseIconProps } from './types'

export const IconAuthError = ({ size }: TBaseIconProps) => {
  return (
    <Svg
      width={size ?? 148}
      height={size ?? 148}
      viewBox="0 0 148 148"
      fill="none"
    >
      <Circle cx={74} cy={74} r={74} fill="#403A47" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46 23h46c.09 0 .18.006.268.018a1.5 1.5 0 011.399.54l21 26c.277.342.378.77.315 1.173.012.088.018.178.018.269v63c0 5.523-4.477 10-10 10H46c-5.523 0-10-4.477-10-10V33c0-5.523 4.477-10 10-10zm64.36 26L94 28.744V48a1 1 0 001 1h15.36zM95 52a4 4 0 01-4-4V26H46a7 7 0 00-7 7v81a7 7 0 007 7h59a7 7 0 007-7V52H95z"
        fill="#6C78E6"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55.825 59.56a1.5 1.5 0 012.122-2.12l4.44 4.439 4.439-4.44a1.5 1.5 0 012.12 2.122L64.508 64l4.44 4.44a1.5 1.5 0 01-2.121 2.12l-4.44-4.439-4.44 4.44a1.5 1.5 0 01-2.12-2.122L60.264 64l-4.44-4.44zm48.82 27.883a1.5 1.5 0 00-1.003-1.869A95.998 95.998 0 0075.886 81.5a96.038 96.038 0 00-27.82 4.093 1.5 1.5 0 00.868 2.872A93.037 93.037 0 0175.886 84.5c1.002 0 2.002.016 3 .047V94a8.5 8.5 0 1017 0v-7.345a92.262 92.262 0 016.89 1.791 1.5 1.5 0 001.869-1.003zM81.886 84.69a93.65 93.65 0 014 .341V93.5a1.5 1.5 0 103 0v-8.099c1.34.188 2.674.404 4 .649V94a5.5 5.5 0 01-11 0v-9.31zm.94-27.25a1.5 1.5 0 000 2.12L87.264 64l-4.44 4.44a1.5 1.5 0 002.122 2.12l4.44-4.439 4.439 4.44a1.5 1.5 0 002.12-2.122L91.508 64l4.44-4.44a1.5 1.5 0 00-2.121-2.12l-4.44 4.439-4.44-4.44a1.5 1.5 0 00-2.12 0z"
        fill="#F678BA"
      />
    </Svg>
  )
}
