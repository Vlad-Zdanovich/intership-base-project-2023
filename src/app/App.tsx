import React, { StrictMode } from 'react'
import { DevSettings, SafeAreaView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { AppNavigation } from '@app/app-navigation'
import { AppThemeProvider, styled } from '@shared/ui/theme'
import { QueryClient, QueryClientProvider } from 'react-query'

import { Storybook } from '../../.storybook'

const StorybookButton = styled.TouchableOpacity`
  height: 32px;
  padding: ${({ theme }) => theme.spacing(1)}px;
  background-color: ${({ theme }) => theme.palette.button.primary};
`

const StorybookButtonText = styled.Text`
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: center;
`

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`

const queryClient = new QueryClient()

export const App = () => {
  const [isStorybookVisible, setIsStorybookVisible] = React.useState(false)

  React.useEffect(() => {
    DevSettings.addMenuItem(
      `${isStorybookVisible ? 'Turn off storybook' : 'Turn on storybook'}`,
      () => setIsStorybookVisible((prevState) => !prevState),
    )
  }, [isStorybookVisible])

  if (isStorybookVisible) {
    return (
      <StrictMode>
        <AppThemeProvider>
          <SafeAreaProvider>
            <SafeArea>
              <Storybook />
              <StorybookButton onPress={() => setIsStorybookVisible(false)}>
                <StorybookButtonText>OPEN APP</StorybookButtonText>
              </StorybookButton>
            </SafeArea>
          </SafeAreaProvider>
        </AppThemeProvider>
      </StrictMode>
    )
  }

  return (
    <StrictMode>
      <AppThemeProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <SafeAreaProvider>
              <AppNavigation />
            </SafeAreaProvider>
          </NavigationContainer>
        </QueryClientProvider>
      </AppThemeProvider>
    </StrictMode>
  )
}
