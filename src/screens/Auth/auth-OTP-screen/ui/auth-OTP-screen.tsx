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

type Props = {
  otpCode: string
  onKeyPress: TKeyboardPress
}

export const AuthOTPScreen = ({ otpCode, onKeyPress }: Props) => {
  return (
    <Wrapper>
      <InputWrapper>
        <Title variant="body15Regular" align="center">
          На ваш номер отправлено SMS с кодом подтверждения.
        </Title>
        <OTPInputs otpCode={otpCode} otpLen={4} isValid={true} />
      </InputWrapper>
      <Keyboard
        buttonList={[
          [{ value: '1' }, { value: '2' }, { value: '3' }],
          [{ value: '4' }, { value: '5' }, { value: '6' }],
          [{ value: '7' }, { value: '8' }, { value: '9' }],
          [
            { value: `Повторить через ${'2:59'}`, type: 'cancel' },
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
