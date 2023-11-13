import React, { Dispatch, SetStateAction, useState, memo } from 'react'
import { styled } from '@shared/ui/theme'
import { useTheme } from '@shared/hooks'
import { Separator, Typography } from '@shared/ui/atoms'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.secondary};
  margin-top: 16px;
`

const InputWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
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
  padding: 16px 0px;
  font-family: SF Pro Display;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: 0.338px;
`

const Title = styled(Typography)`
  padding: 16px;

  color: ${({ theme }) => theme.palette.text.tertiary};
  background: ${({ theme }) => theme.palette.background.secondary};
`

const InputSeparator = styled(Separator)`
  margin: 0px 16px;
`

type AmountInputProps = {
  inputValue: number
  setInputValue: Dispatch<SetStateAction<number>>
}

export const AmountInput = memo(
  ({ inputValue, setInputValue }: AmountInputProps) => {
    const [isFocus, setIsFocus] = useState(false)
    const theme = useTheme()

    function onChangeText(text: string) {
      try {
        setInputValue(Number(text))
      } catch (error) {
        console.log(error)
      }
    }

    return (
      <Wrapper>
        <Title variant="body15Semibold">Сумма</Title>
        <InputWrapper>
          <AmountInputView
            value={inputValue?.toString() ?? ''}
            onEndEditing={() => setIsFocus(false)}
            onFocus={() => {
              setIsFocus(true)
            }}
            onChangeText={(text) => onChangeText(text)}
            placeholder="0"
            placeholderTextColor={theme.palette.text.primary}
            keyboardType="decimal-pad"
          />
          <PostfixView> ₽</PostfixView>
        </InputWrapper>

        <InputSeparator color={isFocus ? theme.palette.accent.primary : ''} />
      </Wrapper>
    )
  },
)
