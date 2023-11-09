import React, { useCallback, useLayoutEffect, useState } from 'react'
import { styled } from '@shared/ui/theme'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useTheme } from '@shared/hooks'
import { Alert, KeyboardAvoidingView, Platform } from 'react-native'
import { CardItem } from '@entities/card-item'
import { PhoneInput } from '@entities/phone-input'
import { AmountInput } from '@entities/amount-input'
import { PaymentsNavigationParamsList } from '@features/payments-connector'
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

type CreatePaymentScreenProps = NativeStackScreenProps<
  PaymentsNavigationParamsList,
  'CreatePaymentScreen'
>

export const CreatePaymentScreen = ({ route }: CreatePaymentScreenProps) => {
  const [phone, setPhone] = useState('')
  const [amount, setAmount] = useState(0)

  const onSubmitButtonTapped = useCallback(() => {
    if (amount > 1 && amount < 20000 && phone.length == 17) {
      Alert.alert('Успех')
    } else {
      Alert.alert('Ошибка', 'Проверьте введенные данные')
    }
  }, [amount, phone])

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
        <PhoneInput
          icon={route.params.service_icon}
          phone={phone}
          setPhone={setPhone}
        />
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
