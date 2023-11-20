import { createEvent, createStore, sample } from "effector";

export type SnackType = 'error' | 'successes' | 'warning'

export type TSnack = {
    type: SnackType
    message: string
    duration: number
}

export const $snackStore = createStore<TSnack[]>([])

export const showSnack = createEvent<TSnack>()
export const hideTopSnack = createEvent()
export const hideAllSnack = createEvent()

$snackStore.on(showSnack, (state, payload) => ([...state, payload]))
$snackStore.on(hideTopSnack, (state, _) => state.slice(1))
$snackStore.reset(hideAllSnack)