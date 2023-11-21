import { setGuestToken } from "@features/confirm-auth"
import { $otpCodeStore, $phoneStore, useConfirmAuth, useOTP } from "@features/OTP"
import { setOTPCodeEvent } from "@features/OTP/model/model"
import { showSnack } from "@entities/snack-connector"
import { useStore } from "effector-react"
import { useCallback, useState } from "react"

type UseOTPHelperProps = {
  onSuccess: () => void,
  // eslint-disable-next-line no-unused-vars
  onErrorSendOTP: (attemptAmount: number) => void,
  onSuccessResendOTP: () => void
}

export const useOTPHelper = ({
  onSuccess,
  onErrorSendOTP,
  onSuccessResendOTP
}: UseOTPHelperProps) => {
    const phone = useStore($phoneStore)
    const { otpId, otpCode } = useStore($otpCodeStore)
    const { mutate: postConfirmAuth, isLoading } = useConfirmAuth()
    const [attemptAmount, setAttemptAmount] = useState(0) 
    const [isValid, setIsValid] = useState(true) 
    const { mutate: getOTPCode } = useOTP()
    
    const checkAuthConfirmed = useCallback(
        (enteredOtpCode: string) => {
          if (enteredOtpCode !== otpCode) {
            setIsValid(false)
            setAttemptAmount(attemptAmount + 1)
            onErrorSendOTP(attemptAmount + 1)
            return
          }
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
        [postConfirmAuth, otpId, phone, onSuccess, attemptAmount, onErrorSendOTP, otpCode],
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
    }, [getOTPCode, phone, onSuccessResendOTP])

    return { checkAuthConfirmed, resendOTP, attemptAmount, isLoading, isValid, setIsValid }
}