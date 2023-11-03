import React, { useEffect, useLayoutEffect, useState } from 'react'
import { SearchBar, Separator, Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { PaymentsNavigationParamsList } from '@flows/PaymentsConnector/ui/molecules/types'
import { useTheme } from '@shared/hooks'
import { FlatList } from 'react-native'
import { ServiceItem } from '../ui/atoms/ServiceItem'
import { Service } from '@shared/atoms/payment-type'
import { useSearchPaymentServices } from '@shared/hooks/use-search-service'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
`

const SearchBarWrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  padding: 16px;
`

type Props = NativeStackScreenProps<
  PaymentsNavigationParamsList,
  'ServicesScreen'
>

export const ServicesScreen = ({ navigation, route }: Props) => {
  const { category_name, services } = route.params
  const theme = useTheme()
  const { filteredServices, searchText, setSearchText } =
    useSearchPaymentServices(services)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerTitle: category_name,
    })
  }, [])

  function onServiceTapped(service: Service) {
    navigation.navigate('CreatePaymentScreen', service)
  }

  return (
    <Wrapper>
      <SearchBarWrapper>
        <SearchBar
          placeholder="Поиск"
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor={theme.palette.text.tertiary}
        />
      </SearchBarWrapper>
      <FlatList
        data={filteredServices}
        keyExtractor={(type) => type.service_id}
        style={{ backgroundColor: theme.palette.background.secondary }}
        renderItem={({ item }) => (
          <ServiceItem service={item} onPress={() => onServiceTapped(item)} />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </Wrapper>
  )
}
