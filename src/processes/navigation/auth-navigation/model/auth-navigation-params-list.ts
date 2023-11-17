import { OTPCodeResponse } from "@shared/api/otp/model"

export type AuthNavigationParamsList = {
    AuthPhoneInputScreen: undefined
    AuthOTPScreen: OTPCodeResponse
    AuthPasswordInputScreen: undefined
    AutnSuccsessScreen: undefined
}