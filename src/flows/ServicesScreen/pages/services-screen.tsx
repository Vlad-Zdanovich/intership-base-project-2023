import React from 'react'
import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { PaymentsNavigationParamsList } from '@flows/Payments/ui/molecules/types'

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
  return (
    <Wrapper>
      <Typography variant="largeTitle">Home page!</Typography>
    </Wrapper>
  )
}
