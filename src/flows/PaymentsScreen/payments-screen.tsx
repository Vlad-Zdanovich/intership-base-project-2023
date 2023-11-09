import React, { useLayoutEffect } from 'react'
import { ActivityIndicator, Alert, FlatList } from 'react-native'
import { styled } from '@shared/ui/theme'
import { PaymentType } from '@shared/atoms/payment-type'
import { useTheme } from '@shared/hooks'
import { usePaymentTypes } from '@shared/hooks/use-payment-types'
import { PaymentsItem } from './ui/atoms/PaymentsItem'
import { PaymentsNavigationParamsList } from '../PaymentsConnector/ui/molecules/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Separator } from '@shared/ui/atoms'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  align-item: center;
  justify-content: center;
`

type Props = NativeStackScreenProps<
  PaymentsNavigationParamsList,
  'PaymentsScreen'
>

export const PaymentsScreen = ({ navigation, route }: Props) => {
  const { paymentTypes, isLoading, error } = usePaymentTypes()
  const theme = useTheme()

  useLayoutEffect(() => {
    if (error) {
      Alert.prompt(error)
    }
  }, [error])

  const onPaymentItem = (type: PaymentType) => {
    navigation.navigate('ServicesScreen', type)
  }

  return (
    <Wrapper>
      <FlatList
        data={paymentTypes}
        contentContainerStyle={{ paddingBottom: 56, paddingHorizontal: 16 }}
        keyExtractor={(type) => type.category_id}
        renderItem={({ item }) => (
          <PaymentsItem type={item} onPress={(type) => onPaymentItem(type)} />
        )}
        ItemSeparatorComponent={() => <Separator />}
        ListHeaderComponent={
          isLoading ? <ActivityIndicator size={'large'} /> : null
        }
      />
    </Wrapper>
  )
}
