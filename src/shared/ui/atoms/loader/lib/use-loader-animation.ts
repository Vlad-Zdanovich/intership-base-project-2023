import { useCallback, useEffect, useMemo } from "react"
import { Animated, Easing } from "react-native"

export const useLoaderAnimation = () => {
    const spinValue = useMemo(() => new Animated.Value(0), [])

    const spin = useCallback(() => {
      spinValue.setValue(0)
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => spin())
    }, [spinValue])
  
    const rotate = useMemo(
      () =>
        spinValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      [spinValue],
    )
  
    useEffect(() => {
      spin()
    }, [])

    return { rotate } 
}