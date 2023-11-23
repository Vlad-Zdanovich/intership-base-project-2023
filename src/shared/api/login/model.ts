export type LoginRequest = {
    guestToken: string,
    password: string
}

export type LoginInfoResponse = {
    accessToken: string,
    refreshToken: string
}