import React, { useLayoutEffect } from 'react'
import { styled } from '@shared/ui/theme'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { PaymentsNavigationParamsList } from '../PaymentsConnector/ui/molecules/types'
import { Typography } from '@shared/ui/atoms'
import { useTheme } from '@shared/hooks'
import { CardItem, PhoneInput } from './ui/atoms'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
`

type CreatePaymentScreenProps = NativeStackScreenProps<
  PaymentsNavigationParamsList,
  'CreatePaymentScreen'
>

export const CreatePaymentScreen = ({
  navigation,
  route,
}: CreatePaymentScreenProps) => {
  const theme = useTheme()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.service_name,
    })
  }, [])
  return (
    <Wrapper>
      <Typography
        variant="body15Semibold"
        style={{
          padding: 16,
          color: theme.palette.text.tertiary,
          backgroundColor: theme.palette.background.secondary,
        }}
      >
        Карта для оплаты
      </Typography>
      <CardItem
        type="mastercard"
        name="Карта зарплатная"
        value="457 334,00 ₽"
      />
      <PhoneInput icon={route.params.service_icon} onValueChange={() => {}} />
    </Wrapper>
  )
}
