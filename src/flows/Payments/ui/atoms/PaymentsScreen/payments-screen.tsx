import React, { useLayoutEffect } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { styled } from '@shared/ui/theme'
import { PaymentType } from '@shared/atoms/payment-type'
import { useTheme } from '@shared/hooks'
import { usePaymentTypes } from '@shared/hooks/use-payment-types'
import { PaymentsItem } from '../PaymentsItem'
import { PaymentsNavigationParamsList } from '../../molecules/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Separator, Typography } from '@shared/ui/atoms'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  align-item: center;
  justify-content: center;
`

const HeaderWrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 116px;
  padding-left: 16px;
  padding-bottom: 8px;
`

type Props = NativeStackScreenProps<
  PaymentsNavigationParamsList,
  'PaymentsScreen'
>

export const PaymentsScreen = ({ navigation, route }: Props) => {
  const { paymentTypes, isLoading, error } = usePaymentTypes()
  const theme = useTheme()

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => {
        return (
          <HeaderWrapper>
            <Typography align="left" variant="largeTitle34">
              Платежы
            </Typography>
          </HeaderWrapper>
        )
      },
    })
  }, [])

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
