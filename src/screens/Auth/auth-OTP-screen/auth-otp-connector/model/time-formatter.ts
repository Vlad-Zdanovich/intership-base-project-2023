import { useCallback } from "react"

export const timeFormatter = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const formatNumberToMinutes = useCallback((value: number) => {
        const minutes = Math.floor(value / 60)
        const seconds = value - minutes * 60
    

        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    }, []) 

    return { formatNumberToMinutes }
}