import React, { useCallback } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { usePaymentTypes } from '@features/payment-type/model/use-payment-types'
import { Service } from '@shared/api'
import { PaymentsNavigationParamsList } from '@screens/payments-screen'
import { useSearchPaymentServices } from '@shared/hooks/use-search-service'

import { ServicesScreen } from '../../ui'

type Props = NativeStackScreenProps<
  PaymentsNavigationParamsList,
  'ServicesScreen'
>

export const ServicesScreenConnector = ({ navigation, route }: Props) => {
  const { paymentTypes } = usePaymentTypes()
  const services =
    paymentTypes?.find((type) => type.category_id == route.params.paymentsId)
      ?.services ?? []
  const { filteredServices, searchText, setSearchText } =
    useSearchPaymentServices(services)

  const onServiceTapped = useCallback(
    (service: Service) => {
      navigation.navigate('CreatePaymentScreen', {
        title: service.service_name,
        serviceIcon: service.service_icon,
        serviceId: service.service_id,
      })
    },
    [navigation],
  )

  return (
    <ServicesScreen
      filteredServices={filteredServices}
      searchText={searchText}
      setSearchText={setSearchText}
      onServiceTapped={onServiceTapped}
    />
  )
}
