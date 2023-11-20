import React from 'react'
import { styled } from '@shared/ui/theme'
import { AuthNavigation, TabsNavigation } from 'processes/navigation'
import { $loginStatusStore } from '@features/login'
import { useStore } from 'effector-react'
import { SnackConnector } from '@entities/snack-connector'

const Wrapper = styled.View`
  flex: 1;
`

export const AppNavigation = () => {
  const { isLogin } = useStore($loginStatusStore)

  return (
    <Wrapper>
      <SnackConnector />
      {isLogin ? <TabsNavigation /> : <AuthNavigation />}
    </Wrapper>
  )
}
