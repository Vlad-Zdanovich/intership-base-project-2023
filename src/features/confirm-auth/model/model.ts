import { createEvent, createStore } from "effector";

export const $guestTokenStore = createStore<string>('')

export const setGuestToken = createEvent<string>()

$guestTokenStore.on(setGuestToken, (_, payload) => payload)