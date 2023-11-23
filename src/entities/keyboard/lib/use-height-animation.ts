import { useCallback, useEffect, useMemo } from "react"
import { Animated, Easing } from "react-native"

type Props = {
    toValue: number,
    isShowing: boolean
}

export const useHeightAnimation = ({toValue, isShowing}: Props) => {
    const heightValue = useMemo(() => new Animated.Value(toValue), [toValue])

    const heightAnimation = useCallback(() => {
      Animated.timing(heightValue, {
        toValue: isShowing ? 0 : 1,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start()
    }, [heightValue, isShowing])
  
    const height = useMemo(
      () =>
        heightValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, toValue],
        }),
      [heightValue, toValue],
    )
  
    useEffect(() => {
        heightAnimation()
    }, [heightAnimation, isShowing])

    return { height }
}