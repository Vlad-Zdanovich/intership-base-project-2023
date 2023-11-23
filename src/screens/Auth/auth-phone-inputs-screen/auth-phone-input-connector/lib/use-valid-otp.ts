import { useCallback } from 'react'
import { useOTP } from "@features/OTP"
import { showSnack } from '@entities/snack-connector'
import { OTPCodeResponse } from '@shared/api/otp/model'

type Props = {
    phone: string
    // eslint-disable-next-line no-unused-vars
    onSuccess: (data: OTPCodeResponse) => void
}

export const useValideOTP = ({ phone, onSuccess }: Props) => {
    const { mutate: getOTPCode, isLoading } = useOTP()

    const onSend = useCallback(() => {
        if (phone.length == 10) {
          getOTPCode(
            { phone: phone },
            {
              onSuccess: (data) => onSuccess(data),
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
      }, [getOTPCode, onSuccess, phone])

    return { onSend, isLoading }
}