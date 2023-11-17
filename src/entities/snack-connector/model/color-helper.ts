import { useTheme } from "@shared/hooks"
import { useCallback } from "react"
import { SnackType } from "./model"

export const colorHelper = () => {
    const theme = useTheme()

    const getColor = useCallback((type: SnackType) => {
        switch (type) {
          case 'error':
            return theme.palette.indicator.error
          case 'successes':
            return theme.palette.indicator.done
          case 'warning':
            return theme.palette.indicator.done
        }
      }, [theme]) 

    return { getColor }
}