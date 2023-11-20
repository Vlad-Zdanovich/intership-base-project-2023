import { useMemo, useState } from "react"

const MIN_PASSWORD_LENGTH = 6

export const usePassword = (initialValue: string) => {
    const [password, setPassword] = useState(initialValue)

    const isLengthValid = useMemo(() => {
        const regex = /^([0-9A-Za-z]{5,255})$/g
        return regex.test(password)
    }, [password])

    const isCharactersValid = useMemo(() => {
        return password.length > MIN_PASSWORD_LENGTH
    }, [password])

    return {
        password,
        isLengthValid,
        isCharactersValid,
        setPassword
    }
}