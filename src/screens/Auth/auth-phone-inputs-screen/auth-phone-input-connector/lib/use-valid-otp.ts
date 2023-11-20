import { useCallback } from 'react'
import { useOTP } from "@features/OTP"
import { showSnack } from '@features/snack-connector'
import { OTPCodeResponse } from '@shared/api/otp/model'

type Props = {
    phone: string
    onSuccess: (data: OTPCodeResponse) => void
}

export const useValideOTP = ({ phone, onSuccess }: Props) => {
    const { getOTPCode, isLoading } = useOTP()

    const onSend = useCallback(() => {
        if (phone.length == 10) {
          getOTPCode(
            { phone: phone },
            {
              onSuccess: onSuccess,
              onError: () => {
                showSnack({
                  type: 'error',
                  message: 'Кто-то что-то сломал',
                  duration: 3000,
                })
              },
            },
          )
        } else {
          showSnack({
            type: 'error',
            message: 'Неправильный номер телефона',
            duration: 3000,
          })
        }
      }, [getOTPCode, phone])

    return { onSend, isLoading }
}