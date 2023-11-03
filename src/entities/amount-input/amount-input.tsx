import React, { forwardRef, useEffect, useState } from 'react'
import { styled } from '@shared/ui/theme'
import { useTheme } from '@shared/hooks'
import { Separator, Typography } from '@shared/ui/atoms'
import { ChipsSelection } from '@entities/chips-selection'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.secondary};
  margin-vertical: 16px;
  padding-horizontal: 16px;
`

const InputWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-vertical: 16px;
`

const AmountInputView = styled.TextInput`
  color: ${({ theme }) => theme.palette.text.primary};
  font-family: SF Pro Display;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: 0.338px;
`

const PostfixView = styled.Text`
  color: ${({ theme }) => theme.palette.text.primary};
  padding-vertical: 16px;
  font-family: SF Pro Display;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: 0.338px;
`

type AmountInputProps = {
  onValueChange: (value: number) => void
}

export const AmountInput = ({ onValueChange }: AmountInputProps) => {
  const [color, setColor] = useState('')
  const [inputValue, setInputValue] = useState<number | undefined>(undefined)
  const theme = useTheme()

  useEffect(() => {
    onValueChange(inputValue ?? 0)
  }, [inputValue])

  function onChangeText(text: string) {
    try {
      setInputValue(+text)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Wrapper>
      <Typography
        variant="body15Semibold"
        style={{
          paddingVertical: 16,
          color: theme.palette.text.tertiary,
          backgroundColor: theme.palette.background.secondary,
        }}
      >
        Сумма
      </Typography>
      <InputWrapper>
        <AmountInputView
          value={inputValue?.toString() ?? ''}
          onEndEditing={() => setColor('')}
          onPressIn={() => setColor(theme.palette.accent.primary)}
          onChangeText={(text) => onChangeText(text)}
          placeholder="0"
          placeholderTextColor={theme.palette.text.primary}
          keyboardType="decimal-pad"
        />
        <PostfixView children=" ₽" />
      </InputWrapper>

      <Separator color={color} />
      <ChipsSelection
        style={{ marginTop: 8, marginBottom: 16 }}
        onChipsTapped={(value) => setInputValue(value)}
      />
    </Wrapper>
  )
}
