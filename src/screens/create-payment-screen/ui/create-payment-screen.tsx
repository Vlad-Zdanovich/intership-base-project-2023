import React, { Dispatch } from 'react'
import { styled } from '@shared/ui/theme'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { CardItem } from '@entities/card-item'
import { PhoneInput } from '@entities/phone-input'
import { AmountInput } from '@entities/amount-input'
import { Typography } from '@shared/ui/atoms'
import { ChipsSelection } from '@entities/chips-selection'

const Wrapper = styled.ScrollView`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
`
const ButtonWrapper = styled.TouchableOpacity`
  background: ${({ theme }) => theme.palette.button.primary};
  justify-content: center;
  border-radius: 26px;
  height: 52px;
  margin: 0px 16px;
`

const InputWrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.secondary};
  height: 116px;
  margin-top: 16px;
  margin-bottom: 16px;
`

const ChipsWrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.secondary};
  margin-bottom: 16px;
`

const Chips = styled(ChipsSelection)`
  margin-top: 8px;
  margin-left: 16px;
  margin-bottom: 16px;
`

const SubmitButton = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`

type CreatePaymentScreenProps = {
  icon: string
  phone: string
  amount: number
  setPhone: Dispatch<React.SetStateAction<string>>
  setAmount: Dispatch<React.SetStateAction<number>>
  onSubmitButtonTapped: () => void
}

export const CreatePaymentScreen = ({
  icon,
  phone,
  amount,
  setPhone,
  setAmount,
  onSubmitButtonTapped,
}: CreatePaymentScreenProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
      style={{ flex: 1 }}
    >
      <Wrapper contentInset={{ bottom: 16 }}>
        <CardItem
          type="mastercard"
          name="Карта зарплатная"
          value="457 334,00 ₽"
        />
        <InputWrapper>
          <PhoneInput icon={icon} phone={phone} setPhone={setPhone} />
        </InputWrapper>
        <AmountInput inputValue={amount} setInputValue={setAmount} />
        <ChipsWrapper>
          <Chips onChipsTapped={(value) => setAmount(value)} />
        </ChipsWrapper>

        <ButtonWrapper onPress={onSubmitButtonTapped}>
          <SubmitButton variant="button" align="center">
            Продолжить
          </SubmitButton>
        </ButtonWrapper>
      </Wrapper>
    </KeyboardAvoidingView>
  )
}
