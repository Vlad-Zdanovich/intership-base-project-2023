import { useCallback, useEffect, useState } from "react"

export const useOTPTimer = (durationInSeconds: number) => {
    const [timeLeft, setTimeLeft] = useState(durationInSeconds)
    const [isTimeExpired, setTimeExpired] = useState(false)

    const resetTimeLeft = useCallback(() => {
        setTimeLeft(durationInSeconds)
    }, [setTimeLeft, durationInSeconds])

    useEffect(() => {
        if (isTimeExpired) {
            return
        }

        if (timeLeft === 0) {
            setTimeExpired(true)
            return
        }

        setTimeout(() => {
            setTimeLeft(prev => --prev)
        }, 1000)
    }, [timeLeft, setTimeLeft, durationInSeconds, setTimeExpired, isTimeExpired])

    return {
        timeLeft,
        isTimeExpired,
        resetTimeLeft
    }
}