type AuthSuccsessScreenProps = {
    isSuccess: boolean
    accessToken?: string
    refreshToken?: string
}

export type AuthNavigationParamsList = {
    AuthPhoneInputScreen: undefined
    AuthOTPScreen: undefined
    AuthPasswordInputScreen: undefined
    AuthSuccsessScreen: AuthSuccsessScreenProps
}