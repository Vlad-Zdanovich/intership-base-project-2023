import { setGuestToken } from "@features/confirm-auth"
import { $otpCodeStore, $phoneStore, useConfirmAuth, useOTP } from "@features/OTP"
import { setOTPCodeEvent } from "@features/OTP/model/model"
import { showSnack } from "@entities/snack-connector"
import { useStore } from "effector-react"
import { Dispatch, SetStateAction, useCallback, useState } from "react"

type UseOTPHelperProps = {
  onSuccess: () => void,
  // eslint-disable-next-line no-unused-vars
  onErrorSendOTP: (attemptAmount: number) => void,
  onSuccessResendOTP: () => void,
  setIsValid: Dispatch<SetStateAction<boolean>>
}

export const useOTPHelper = ({
  onSuccess,
  onErrorSendOTP,
  onSuccessResendOTP,
  setIsValid
}: UseOTPHelperProps) => {
    const phone = useStore($phoneStore)
    const { otpId, otpCode } = useStore($otpCodeStore)
    const { mutate: postConfirmAuth, isLoading } = useConfirmAuth()
    const [attemptAmount, setAttemptAmount] = useState(0) 
    const { mutate: getOTPCode } = useOTP()
    
    const checkAuthConfirmed = useCallback(
        (enteredOtpCode: string) => {
          if (isLoading) return

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
        [isLoading, otpCode, postConfirmAuth, otpId, phone, setIsValid, attemptAmount, onErrorSendOTP, onSuccess],
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

    return { checkAuthConfirmed, resendOTP, attemptAmount, isLoading, setIsValid }
}