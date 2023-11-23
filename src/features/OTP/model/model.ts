import { OTPCodeResponse } from "@shared/api/otp/model";
import { createEvent, createStore } from "effector";

export const $phoneStore = createStore<string>("")
export const $otpCodeStore = createStore<OTPCodeResponse>({otpId: '', otpCode: '', otpLen: 4})

export const setPhoneEvent = createEvent<string>()
export const setOTPCodeEvent = createEvent<OTPCodeResponse>()

$phoneStore.on(setPhoneEvent, (_, payload) => payload)
$otpCodeStore.on(setOTPCodeEvent, (_, payload) => payload)