import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Separator, Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { PaymentsNavigationParamsList } from '@flows/PaymentsConnector/ui/molecules/types'
import { useTheme } from '@shared/hooks'
import { FlatList } from 'react-native'
import { ServiceItem } from '../ui/atoms/ServiceItem'
import { Service } from '@shared/atoms/payment-type'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
  padding: 16px;
`
type Props = NativeStackScreenProps<
  PaymentsNavigationParamsList,
  'ServicesScreen'
>

export const ServicesScreen = ({ navigation, route }: Props) => {
  const { category_name, services } = route.params
  const [search, setSearch] = useState('')
  const theme = useTheme()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerTitle: category_name,
      headerSearchBarOptions: {
        onChangeText: (event) => setSearch(event.nativeEvent.text),
      },
    })
  }, [])

  function onServiceTapped(service: Service) {
    navigation.navigate('CreatePaymentScreen', service)
  }

  return (
    <Wrapper>
      <FlatList
        data={services}
        contentContainerStyle={{ paddingTop: 126 }}
        keyExtractor={(type) => type.service_id}
        renderItem={({ item }) => (
          <ServiceItem service={item} onPress={() => onServiceTapped(item)} />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </Wrapper>
  )
}
