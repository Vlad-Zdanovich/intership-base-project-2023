import React from 'react'
import { styled } from '@shared/ui/theme'
import { SnackConnector } from '@features/snack-connector'
import { TabsNavigation } from 'processes/navigation'

const Wrapper = styled.View`
  flex: 1;
`

export const AppNavigation = () => {
  return (
    <Wrapper>
      <SnackConnector />
      <TabsNavigation />
    </Wrapper>
  )
}
