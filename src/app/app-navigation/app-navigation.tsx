import React from 'react'
import { styled } from '@shared/ui/theme'
import { AuthNavigation, TabsNavigation } from 'processes/navigation'
import { $loginStatusStore } from '@features/login'
import { useStore } from 'effector-react'
import { SnackConnector } from '@entities/snack-connector'
import { StatusBar } from 'react-native'

const Wrapper = styled.View`
  flex: 1;
`

export const AppNavigation = () => {
  const { isLogin } = useStore($loginStatusStore)

  return (
    <Wrapper>
      <StatusBar barStyle="light-content" />
      <SnackConnector />
      {isLogin ? <TabsNavigation /> : <AuthNavigation />}
    </Wrapper>
  )
}
