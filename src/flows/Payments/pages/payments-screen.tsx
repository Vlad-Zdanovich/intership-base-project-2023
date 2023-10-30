import React from 'react'
import { FlatList, View } from 'react-native'
import { styled } from '@shared/ui/theme'
import { TabsNavigationParamsList } from '@app/app-navigation/types'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { PaymentsItem } from '../ui/atoms/PaymentsItem'
import { ListRenderItem } from 'react-native/types'
import { PaymentType } from '@shared/atoms/payment-type'
import { useTheme } from '@shared/hooks'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  align-item: center;
  justify-content: center;
  padding: 16px;
`

type Props = BottomTabScreenProps<TabsNavigationParamsList, 'PaymentsScreen'>

export const PaymentsScreen = ({ navigation, route }: Props) => {
  const theme = useTheme()

  const onPaymentItem = (type: PaymentType) => {}

  const paymentsItems: PaymentType[] = ['mobile', 'hcs', 'internet']

  return (
    <Wrapper>
      <FlatList
        data={paymentsItems}
        contentContainerStyle={{ paddingBottom: 56 }}
        keyExtractor={(type) => type}
        renderItem={({ item }) => (
          <PaymentsItem type={item} onPress={(type) => onPaymentItem(type)} />
        )}
        ItemSeparatorComponent={(props) => {
          return (
            <View
              style={{
                height: 1,
                backgroundColor: theme.palette.content.secondary,
              }}
            />
          )
        }}
      />
    </Wrapper>
  )
}
