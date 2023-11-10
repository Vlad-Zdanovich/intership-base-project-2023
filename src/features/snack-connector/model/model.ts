import { createEvent, createStore, sample } from "effector";

export type SnackModel = {
    type: 'error' | 'successes' | 'warning'
    message: string
    duration: number
}

export const $snackStore = createStore<SnackModel[]>([])

export const showSnack = createEvent<SnackModel>()
export const hideTopSnack = createEvent()
export const hideAllSnack = createEvent()

$snackStore.on(showSnack, (state, payload) => ([...state, payload]))
$snackStore.on(hideTopSnack, (state, _) => state.filter((_, index) => index !== 0))
$snackStore.reset(hideAllSnack)