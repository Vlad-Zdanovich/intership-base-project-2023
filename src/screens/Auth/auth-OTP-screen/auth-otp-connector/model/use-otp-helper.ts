import { setGuestToken } from "@features/confirm-auth"
import { $otpCodeStore, $phoneStore, useConfirmAuth, useOTP } from "@features/OTP"
import { setOTPCodeEvent, setPhoneEvent } from "@features/OTP/model/model"
import { showSnack } from "@entities/snack-connector"
import { useStore } from "effector-react"
import { useCallback, useState } from "react"

export const useOTPHelper = (
  onSuccess: () => void,
  onErrorSendOTP: (attemptAmount: number) => void,
  onSuccessResendOTP: () => void
) => {
    const phone = useStore($phoneStore)
    const { otpId } = useStore($otpCodeStore)
    const { mutate: postConfirmAuth, isLoading } = useConfirmAuth()
    const [attemptAmount, setAttemptAmount] = useState(0) 
    const [isValid, setIsValid] = useState(true) 
    const { getOTPCode } = useOTP()
    
    const checkAuthConfirmed = useCallback(
        (enteredOtpCode: string) => {
          postConfirmAuth(
            {
              otpId: otpId,
              phone: phone,
              otpCode: enteredOtpCode,
            },
            {
              onSuccess: (data) => {
                setGuestToken(data.guestToken)
                onSuccess()
              },
              onError: () => {
                setIsValid(false)
                setAttemptAmount(attemptAmount + 1)
                onErrorSendOTP(attemptAmount + 1)
                
              },
            },
          )
        },
        [postConfirmAuth, otpId, phone, setGuestToken, attemptAmount, setAttemptAmount],
    )

    const resendOTP = useCallback(() => {
      getOTPCode(
        { phone: phone },
        {
          onSuccess: (data) => {
            setOTPCodeEvent(data)
            onSuccessResendOTP()
          },
          onError: () => {
            showSnack({
              type: 'error',
              message: 'Ошибка при обновлении кода',
              duration: 3000,
            })
          },
        },
      )
    }, [setOTPCodeEvent, onSuccessResendOTP])

    return { checkAuthConfirmed, resendOTP, attemptAmount, isLoading, isValid, setIsValid }
}