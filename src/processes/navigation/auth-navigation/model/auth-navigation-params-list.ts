type AuthSuccsessScreenProps = {
    isSuccess: boolean
    accessToken?: string
}

export type AuthNavigationParamsList = {
    AuthPhoneInputScreen: undefined
    AuthOTPScreen: undefined
    AuthPasswordInputScreen: undefined
    AuthSuccsessScreen: AuthSuccsessScreenProps
}