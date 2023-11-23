function formatNumberToMinutes(value: number) {
    const minutes = Math.floor(value / 60)
    const seconds = value - minutes * 60

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

export const TimeFormatter =  {
    formatNumberToMinutes
}