import React from 'react'
import { styled } from '@shared/ui/theme'
import { TabsNavigation } from 'processes/navigation'
import axios from 'axios'
import { SnackConnector } from '@entities/snack-connector'

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
