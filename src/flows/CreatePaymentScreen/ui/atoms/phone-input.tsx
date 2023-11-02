import React, { useLayoutEffect } from 'react'
import { styled } from '@shared/ui/theme'
import { useTheme } from '@shared/hooks'
import { Image } from 'react-native'
import { useState } from '@storybook/addons'

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

const PhoneInputView = styled.TextInput`
  padding-horizontal: 16px;
`

type CardItemProps = {
  icon: string
  onValueChange: (value: string) => void
}

export const PhoneInput = ({ icon, onValueChange }: CardItemProps) => {
  const [phone, setPhone] = useState('')
  const theme = useTheme()

  function validateText(text: string) {
    setPhone(text)
  }

  return (
    <Wrapper>
      <InputWrapper>
        <Icon source={{ uri: icon }} />
        <PhoneInputView
          placeholder="Номер телефона"
          value={phone}
          onChangeText={(text) => validateText(text)}
        />
      </InputWrapper>
    </Wrapper>
  )
}
