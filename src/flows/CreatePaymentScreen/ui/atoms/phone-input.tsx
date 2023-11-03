import React, { useState } from 'react'
import { styled } from '@shared/ui/theme'
import { useTheme } from '@shared/hooks'
import MaskInput from 'react-native-mask-input'
import { PHONE_MASK } from '@shared/atoms'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.secondary};
  height: 116px;
  margin-vertical: 16px;
`

const InputWrapper = styled.View`
  background: ${({ theme }) => theme.palette.content.primary};
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 24px 14px;
  padding-horizontal: 16px;
  border-radius: 26px;
`

const Icon = styled.Image`
  height: 24px;
  width: 24px;
  border-radius: 12px;
`

const PhoneInputView = styled(MaskInput)`
  color: ${({ theme }) => theme.palette.text.primary};
  padding-horizontal: 16px;
  font-family: SF Pro Text;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.24px;
`

type CardItemProps = {
  icon: string
  onValueChange: (value: string) => void
}

export const PhoneInput = ({ icon, onValueChange }: CardItemProps) => {
  const [phone, setPhone] = useState('')
  const theme = useTheme()

  return (
    <Wrapper>
      <InputWrapper>
        <Icon source={{ uri: icon }} />
        <PhoneInputView
          value={phone}
          onChangeText={(masked: string) => {
            setPhone(masked)
            onValueChange(masked)
          }}
          keyboardType="phone-pad"
          placeholder="Номер телефона"
          placeholderTextColor={theme.palette.text.tertiary}
          mask={PHONE_MASK}
        />
      </InputWrapper>
    </Wrapper>
  )
}
