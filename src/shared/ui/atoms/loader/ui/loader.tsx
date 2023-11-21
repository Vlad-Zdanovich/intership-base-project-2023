import React from 'react'
import { Animated } from 'react-native'
import { styled } from '@shared/ui/theme'
import { IconLoader } from '@shared/ui/icons'

import { useLoaderAnimation } from '../lib'

type Props = {
  color?: string
}

const AnimatedWrapper = styled(Animated.View)``

const StyledIconLoader = styled(IconLoader)``

export const Loader = ({ color }: Props) => {
  const { rotate } = useLoaderAnimation()

  return (
    <AnimatedWrapper style={{ transform: [{ rotate }] }}>
      <StyledIconLoader color={color} />
    </AnimatedWrapper>
  )
}
