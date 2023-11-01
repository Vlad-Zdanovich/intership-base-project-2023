import React from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { styled } from '@shared/ui/theme'
import { PaymentType } from '@shared/atoms/payment-type'
import { useTheme } from '@shared/hooks'
import { usePaymentTypes } from '@shared/hooks/use-payment-types'
import { PaymentsItem } from '../PaymentsItem'
import { PaymentsNavigationParamsList } from '../../molecules/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  align-item: center;
  justify-content: center;
  padding: 16px;
`

const Separator = styled.View`
  background: ${({ theme }) => theme.palette.content.secondary};
  height: 1px;
`

type Props = NativeStackScreenProps<
  PaymentsNavigationParamsList,
  'PaymentsScreen'
>

export const PaymentsScreen = ({ navigation, route }: Props) => {
  const theme = useTheme()

  const { paymentTypes, isLoading, error } = usePaymentTypes()

  const onPaymentItem = (type: PaymentType) => {
    navigation.navigate('ServicesScreen', type.services)
  }

  return (
    <Wrapper>
      <FlatList
        data={paymentTypes}
        contentContainerStyle={{ paddingBottom: 56 }}
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
