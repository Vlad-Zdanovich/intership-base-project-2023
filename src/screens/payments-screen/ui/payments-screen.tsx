import React from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { styled } from '@shared/ui/theme'
import { PaymentsItem } from '@entities/payments-item'
import { Separator } from '@shared/ui/atoms'
import { PaymentType } from '@shared/api'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
  justify-content: center;
`

type PaymentsScreenProps = {
  paymentTypes: PaymentType[]
  isLoading: boolean
  onPaymentItem: (type: PaymentType) => void
}

export const PaymentsScreen = ({
  paymentTypes,
  isLoading,
  onPaymentItem,
}: PaymentsScreenProps) => {
  return (
    <Wrapper>
      <FlatList
        data={paymentTypes}
        contentContainerStyle={{ paddingBottom: 56, paddingHorizontal: 16 }}
        keyExtractor={(type) => type.category_id}
        renderItem={({ item }) => (
          <PaymentsItem type={item} onPress={onPaymentItem} />
        )}
        ItemSeparatorComponent={() => <Separator />}
        ListHeaderComponent={
          isLoading ? <ActivityIndicator size={'large'} /> : null
        }
      />
    </Wrapper>
  )
}
