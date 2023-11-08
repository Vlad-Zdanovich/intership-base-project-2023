import React, { useCallback, useLayoutEffect, useState } from 'react'
import { styled } from '@shared/ui/theme'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { PaymentsNavigationParamsList } from '../PaymentsConnector/ui/molecules/types'
import { useTheme } from '@shared/hooks'
import { AmountInput, CardItem, PhoneInput } from './ui/atoms'
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native'
import { Typography } from '@shared/ui/atoms'

const Wrapper = styled.ScrollView`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
`
const ButtonWrapper = styled.TouchableOpacity`
  background: ${({ theme }) => theme.palette.button.primary};
  justify-content: center;
  border-radius: 26px;
  height: 52px;
  margin-horizontal: 16px;
`

const SubmitButton = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`

type CreatePaymentScreenProps = NativeStackScreenProps<
  PaymentsNavigationParamsList,
  'CreatePaymentScreen'
>

export const CreatePaymentScreen = ({
  navigation,
  route,
}: CreatePaymentScreenProps) => {
  const [phone, setPhone] = useState('')
  const [amount, setAmount] = useState(0)
  const theme = useTheme()

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
        <ButtonWrapper onPress={onSubmitButtonTapped}>
          <SubmitButton variant="button" align="center">
            Продолжить
          </SubmitButton>
        </ButtonWrapper>
      </Wrapper>
    </KeyboardAvoidingView>
  )
}
