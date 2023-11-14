import { Keyboard } from '@entities/keyboard'
import { PhoneInput } from '@entities/phone-input'
import { Typography } from '@shared/ui/atoms'
import { IconLogoMedium, IconPhone } from '@shared/ui/icons'
import { styled } from '@shared/ui/theme'
import { useCallback, useState } from 'react'

const Wrapper = styled.View<{ isInputFocused: boolean }>`
  padding-bottom: ${({ isInputFocused }) => (isInputFocused ? 300 : 0)}px;
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
`

const InputWrapper = styled.View`
  height: 116px;
  margin-top: 16px;
  margin-bottom: 16px;
`

const ButtonWrapper = styled.TouchableOpacity`
  background: ${({ theme }) => theme.palette.button.primary};
  justify-content: center;
  border-radius: 26px;
  height: 52px;
  margin: 0px 16px;
`

const LogoWrapper = styled.View`
  align-self: center;
  margin-top: 32px;
`

const SubmitButton = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`

export const AuthPhoneInputScreen = () => {
  const [phone, setPhone] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const onSubmitButtonTapped = useCallback(() => {
    setIsFocused(!isFocused)
  }, [setIsFocused, isFocused])

  return (
    <Wrapper isInputFocused={isFocused}>
      <LogoWrapper>
        <IconLogoMedium />
      </LogoWrapper>
      <InputWrapper>
        <PhoneInput
          icon={<IconPhone color="#6C78E6" />}
          phone={phone}
          setPhone={setPhone}
        />
      </InputWrapper>
      <ButtonWrapper onPress={onSubmitButtonTapped}>
        <SubmitButton variant="button" align="center">
          Продолжить
        </SubmitButton>
      </ButtonWrapper>
      <Keyboard
        buttonList={[
          [{ value: '1' }, { value: '2' }, { value: '3' }],
          [{ value: '4' }, { value: '5' }, { value: '6' }],
          [{ value: '7' }, { value: '8' }, { value: '9' }],
          [
            { value: 'Отмена', type: 'cancel' },
            { value: '0' },
            { type: 'delete' },
          ],
        ]}
        isShowing={isFocused}
        onKeyPress={() => {}}
      />
    </Wrapper>
  )
}
