import { showSnack } from "@entities/snack-connector";
import { getPaymentsType, PaymentType } from "@shared/api";
import { storageAdapter } from "@shared/lib";
import { createEffect, createStore, sample } from "effector";
import { persist } from "effector-storage";

export const $paymentsStore = createStore<PaymentType[]>([])
export const $lastRefreshDate = createStore(0)

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

$lastRefreshDate.on($paymentsStore, _ => Date.now())

sample({
    clock: fetchPaymentsFx.doneData,
    source: $paymentsStore,
    fn: (_, clock) => clock ?? [],
    target: $paymentsStore
})

persist({
    store: $paymentsStore,
    adapter: storageAdapter,
    key: "paymentCategories"
})