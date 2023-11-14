import React from 'react'
import { styled } from '@shared/ui/theme'
import { SnackConnector } from '@features/snack-connector'
import { AuthNavigation, TabsNavigation } from 'processes/navigation'

const Wrapper = styled.View`
  flex: 1;
`

export const AppNavigation = () => {
  const isAuth = false

  return (
    <Wrapper>
      <SnackConnector />
      {isAuth ? <TabsNavigation /> : <AuthNavigation />}
    </Wrapper>
  )
}
