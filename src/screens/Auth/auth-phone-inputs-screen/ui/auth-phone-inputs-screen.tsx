import React from 'react'
import { Keyboard, TKeyboardPress } from '@entities/keyboard'
import { PhoneInput } from '@entities/phone-input'
import { Loader, Typography } from '@shared/ui/atoms'
import { IconLogoMedium, IconPhone } from '@shared/ui/icons'
import { styled } from '@shared/ui/theme'
import { Dispatch, SetStateAction } from 'react'
import { Animated } from 'react-native'

import { usePaddingAnimate } from '../lib'

const Wrapper = styled(Animated.View)`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
`

const PhoneAuthWrapper = styled.View`
  justify-content: space-between;
  padding: 16px;
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
  margin: 16px 16px;
`

const LogoWrapper = styled.View`
  align-self: center;
  margin-top: 32px;
`

const SubmitButton = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`

type AuthPhoneInputScreenProps = {
  phone: string
  isFocused: boolean
  isLoading: boolean
  setPhone: Dispatch<SetStateAction<string>>
  setFocus: Dispatch<SetStateAction<boolean>>
  onKeyPress: TKeyboardPress
  onSubmitButtonTapped: () => void
}

export const AuthPhoneInputScreen = ({
  phone,
  isFocused,
  isLoading,
  setPhone,
  setFocus,
  onKeyPress,
  onSubmitButtonTapped,
}: AuthPhoneInputScreenProps) => {
  const { padding } = usePaddingAnimate({ toValue: 300, isShowing: !isFocused })

  return (
    <Wrapper style={{ paddingBottom: padding }}>
      <PhoneAuthWrapper>
        <LogoWrapper>
          <IconLogoMedium />
        </LogoWrapper>
        <InputWrapper>
          <PhoneInput
            icon={<IconPhone color="#6C78E6" />}
            phone={phone}
            isFocused={isFocused}
            setPhone={setPhone}
            showSoftInputOnFocus={false}
            setFocus={setFocus}
            rightItem={isLoading ? <Loader /> : null}
          />
        </InputWrapper>
        <ButtonWrapper disabled={isLoading} onPress={onSubmitButtonTapped}>
          <SubmitButton variant="button" align="center">
            Продолжить
          </SubmitButton>
        </ButtonWrapper>
      </PhoneAuthWrapper>
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
        onKeyPress={onKeyPress}
      />
    </Wrapper>
  )
}
