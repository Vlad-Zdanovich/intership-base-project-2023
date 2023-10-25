import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { PrimaryButton } from '@ui/molecules'
import { Typography } from '@ui/atoms'
import { styled } from '@ui/theme'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
  padding: 16px;
`

export const SomeFlowPageConnector = () => {
  const { navigate } = useNavigation()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const onNavigate = () => navigate('profile')

  return (
    <Wrapper>
      <Typography variant="largeTitle">Home page!</Typography>
      <PrimaryButton onPress={onNavigate}>Go to profile!</PrimaryButton>
    </Wrapper>
  )
}
