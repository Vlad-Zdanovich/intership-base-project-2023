import { createEvent, createStore } from "effector";

type TLoginStatus = {
    isLogin: boolean
    accessToken?: string
    refreshToken?: string
}

export const $loginStatusStore = createStore<TLoginStatus>({ isLogin: false })

export const setLoginStatus = createEvent<TLoginStatus>()

$loginStatusStore.on(setLoginStatus, (_, payload) => payload) 