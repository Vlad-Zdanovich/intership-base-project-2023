import { showSnack } from "@features/snack-connector";
import { getPaymentsType } from "@shared/api";
import { createEffect, createEvent, createStore, sample } from "effector";

export const $paymentsStore = createStore<PaymentItem[]>([])

export const fetchPaymentsFx = createEffect(async () => {
    try {
       return await getPaymentsType()
    } catch (e) {
        showSnack({
            type: 'error',
            message: 'При загрузке данных произошла ошибка',
            duration: 3000,
        })
    }
})

sample({
    clock: fetchPaymentsFx.doneData,
    source: $paymentsStore,
    fn: (_, clock) => clock?.category ?? [],
    target: $paymentsStore
})