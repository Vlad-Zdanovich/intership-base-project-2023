export type TConfirmAuthRequest = {
    otpId: string,
    phone: string,
    otpCode: string
}

export type ConfirmAuthResponse = {
    guestToken: string
}