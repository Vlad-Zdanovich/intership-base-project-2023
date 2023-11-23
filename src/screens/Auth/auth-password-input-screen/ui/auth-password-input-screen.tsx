import React from 'react'
import { PasswordInput } from '@entities/password-input'
import { Typography } from '@shared/ui/atoms'
import { IconClose, IconLogoMedium } from '@shared/ui/icons'
import { styled } from '@shared/ui/theme'
import { Dispatch, SetStateAction } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Platform } from 'react-native'

const Wrapper = styled.KeyboardAvoidingView`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
`

const PasswordAuthWrapper = styled.View`
  justify-content: space-between;
  padding: 16px;
  flex: 1;
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

const CloseWrapper = styled.TouchableOpacity<{ safeAreaTopOffset: number }>`
  position: absolute;
  padding-left: 16px;
  padding-top: ${({ safeAreaTopOffset }) => safeAreaTopOffset + 16}px;
  z-index: 10;
`

const SubmitButton = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`

const InputWrapper = styled.View`
  align-items: center;
`

const Title = styled(Typography)`
  padding-left: 16px;
  padding-right: 16px;
`

type AuthPasswordInputScreenProps = {
  password: string
  isLoading: boolean
  setPassword: Dispatch<SetStateAction<string>>
  onContinueTapped: () => void
  onCloseTapped: () => void
}

export const AuthPasswordInputScreen = ({
  password,
  isLoading,
  setPassword,
  onContinueTapped,
  onCloseTapped,
}: AuthPasswordInputScreenProps) => {
  const { top } = useSafeAreaInsets()

  return (
    <Wrapper behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <CloseWrapper safeAreaTopOffset={top} onPress={onCloseTapped}>
        <IconClose color="white" size={32} />
      </CloseWrapper>
      <PasswordAuthWrapper>
        <LogoWrapper>
          <IconLogoMedium />
        </LogoWrapper>
        <InputWrapper>
          <Title variant="body15Regular" align="center">
            Введите пароль
          </Title>
          <PasswordInput password={password} setPassword={setPassword} />
        </InputWrapper>
        <ButtonWrapper disabled={isLoading} onPress={onContinueTapped}>
          <SubmitButton variant="button" align="center">
            Войти
          </SubmitButton>
        </ButtonWrapper>
      </PasswordAuthWrapper>
    </Wrapper>
  )
}
