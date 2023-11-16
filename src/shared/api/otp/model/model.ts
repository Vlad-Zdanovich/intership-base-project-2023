export type OTPCodeResponse = {
    otpId: string,
    otpCode: string,
    otpLen: number
}

export type OTPCodeRequest = {
    phone: string
}