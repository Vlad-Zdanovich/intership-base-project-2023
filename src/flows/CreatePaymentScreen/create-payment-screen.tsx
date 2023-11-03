import React, { useLayoutEffect, useState } from 'react'
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

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
`
const ButtonWrapper = styled.View`
  background: ${({ theme }) => theme.palette.button.primary};
  justify-content: center;
  border-radius: 26px;
  height: 52px;
  margin-horizontal: 16px;
`

const SubmitButton = styled.Button`
  font-family: SF Pro Text;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.41px;
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.service_name,
    })
  }, [])

  function onSubmitButtonTapped() {
    if (amount > 1 && amount < 20000 && phone.length == 17) {
      Alert.alert('Успех')
    } else {
      Alert.alert('Ошибка', 'Проверьте введенные данные')
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Wrapper>
          <CardItem
            type="mastercard"
            name="Карта зарплатная"
            value="457 334,00 ₽"
          />
          <PhoneInput
            icon={route.params.service_icon}
            onValueChange={(value) => setPhone(value)}
          />
          <AmountInput onValueChange={(value) => setAmount(value)} />
          <ButtonWrapper>
            <SubmitButton
              color={theme.palette.text.primary}
              title="Продолжить"
              onPress={onSubmitButtonTapped}
            />
          </ButtonWrapper>
        </Wrapper>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
