import { Animated, Easing } from 'react-native'
import { styled } from '@shared/ui/theme'
import { useCallback, useEffect, useMemo } from 'react'
import { IconLoader } from '@shared/ui/icons'
import { useLoaderAnimation } from '../lib'

type Props = {
  color?: string
}

const AnimatedWrapper = styled(Animated.View)``

const StyledIconLoader = styled(IconLoader)``

export const Loader = ({ color }: Props) => {
  const spinValue = useMemo(() => new Animated.Value(0), [])
  const { rotate } = useLoaderAnimation()

  return (
    <AnimatedWrapper style={{ transform: [{ rotate }] }}>
      <StyledIconLoader color={color} />
    </AnimatedWrapper>
  )
}
