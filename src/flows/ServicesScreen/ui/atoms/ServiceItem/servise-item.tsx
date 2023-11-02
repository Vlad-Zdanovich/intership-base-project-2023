import React from 'react'
import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'

import { useTheme } from '@shared/hooks'
import { Service } from '@shared/atoms/payment-type'

const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  height: 68px;
`

const Icon = styled.Image`
  background: ${({ theme }) => theme.palette.content.secondary};
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin: 14px 16px;
`

type ServiceItemProps = {
  service: Service
  onPress: (service: Service) => void
}

export const ServiceItem = ({ service, onPress }: ServiceItemProps) => {
  const theme = useTheme()

  return (
    <Wrapper onPress={() => onPress(service)}>
      <Icon source={{ uri: service.service_icon }} />
      <Typography variant="body15Regular" style={{ alignSelf: 'center' }}>
        {service.service_name}
      </Typography>
    </Wrapper>
  )
}
