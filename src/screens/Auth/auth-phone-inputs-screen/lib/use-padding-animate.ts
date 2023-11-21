import { useCallback, useEffect, useMemo } from "react"
import { Animated, Easing } from "react-native"

type Props = {
  toValue: number
  isShowing: boolean
}

export const usePaddingAnimate = ({toValue, isShowing}: Props) => {
    const paddingValue = useMemo(() => new Animated.Value(0), [])

    const paddingAnimation = useCallback(() => {
      Animated.timing(paddingValue, {
        toValue: isShowing ? 0 : 1,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start()
    }, [paddingValue, isShowing])
  
    const padding = useMemo(
      () =>
      paddingValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, toValue],
        }),
      [paddingValue, toValue],
    )
  
    useEffect(() => {
        paddingAnimation()
    }, [isShowing, paddingAnimation])

    return { padding }
}