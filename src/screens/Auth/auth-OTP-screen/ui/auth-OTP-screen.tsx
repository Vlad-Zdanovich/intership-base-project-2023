import React from 'react'
import { Keyboard, TKeyboardPress } from '@entities/keyboard'
import { OTPInputs } from '@entities/otp-input'
import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.primary};
  justify-content: center;
  padding-bottom: 300px;
  flex: 1;
`

const InputWrapper = styled.View`
  align-items: center;
`

const Title = styled(Typography)`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
`

const ErrorMessage = styled(Typography)`
  color: ${({ theme }) => theme.palette.indicator.error};
  padding: 16px;
`

type Props = {
  otpCode: string
  timeButtonText: string
  errorMessage: string
  isValid: boolean
  otpLen: number
  onKeyPress: TKeyboardPress
}

export const AuthOTPScreen = ({
  otpCode,
  timeButtonText,
  errorMessage,
  isValid,
  otpLen,
  onKeyPress,
}: Props) => {
  return (
    <Wrapper>
      <InputWrapper>
        <Title variant="body15Regular" align="center">
          На ваш номер отправлено SMS с кодом подтверждения.
        </Title>
        <OTPInputs otpCode={otpCode} otpLen={otpLen} isValid={isValid} />
        {!isValid ? (
          <ErrorMessage variant="caption2" align="center">
            {errorMessage}
          </ErrorMessage>
        ) : null}
      </InputWrapper>
      <Keyboard
        buttonList={[
          [{ value: '1' }, { value: '2' }, { value: '3' }],
          [{ value: '4' }, { value: '5' }, { value: '6' }],
          [{ value: '7' }, { value: '8' }, { value: '9' }],
          [
            { value: timeButtonText, type: 'timer' },
            { value: '0' },
            { type: 'delete' },
          ],
        ]}
        isShowing={true}
        onKeyPress={onKeyPress}
      />
    </Wrapper>
  )
}
