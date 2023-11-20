import React from 'react'
import { styled } from '@shared/ui/theme'
import { SnackConnector } from '@features/snack-connector'
import { AuthNavigation, TabsNavigation } from 'processes/navigation'
import { $loginStatusStore } from '@features/login'
import { useStore } from 'effector-react'

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
