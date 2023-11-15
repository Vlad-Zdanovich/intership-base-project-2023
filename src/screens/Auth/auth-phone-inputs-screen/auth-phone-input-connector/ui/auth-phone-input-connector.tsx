import { TKeyboardButton } from '@entities/keyboard'
import { useState, useCallback, useEffect } from 'react'
import { AuthPhoneInputScreen } from '../../ui'

export const AuthPhoneInputConnector = () => {
  const [phone, setPhone] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const onSubmitButtonTapped = useCallback(() => {}, [])

  const onKeyPress = useCallback(
    (keyboardButton: TKeyboardButton) => {
      switch (keyboardButton.type) {
        case 'default':
          setPhone(phone + keyboardButton.value)
          break
        case 'delete':
          setPhone(phone.slice(0, -1))
          break
        case 'cancel':
          setIsFocused(false)
          break
      }
    },
    [setPhone, phone],
  )

  useEffect(() => {
    console.log(isFocused)
  }, [isFocused])

  return (
    <AuthPhoneInputScreen
      phone={phone}
      setPhone={setPhone}
      isFocused={isFocused}
      setFocus={setIsFocused}
      onKeyPress={onKeyPress}
      onSubmitButtonTapped={onSubmitButtonTapped}
    />
  )
}
