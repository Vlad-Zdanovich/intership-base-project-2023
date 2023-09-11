import React, { StrictMode } from 'react'
import { SafeAreaView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { AppNavigation } from '@app/app-navigation'
import { AppThemeProvider, styled } from '@ui/theme'

// const StorybookButton = styled.TouchableOpacity`
//   height: 32px;
//   padding: ${({ theme }) => theme.spacing(1)}px;
//   background-color: ${({ theme }) => theme.palette.button.primary};
// `

// const StorybookButtonText = styled.Text`
//   color: ${({ theme }) => theme.palette.text.primary};
//   text-align: center;
// `

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`

export const App = () => {
  // const [isStorybookClosed, setStorybookClosed] = React.useState(false)

  // if (!isStorybookClosed) {
  //   return (
  //     <StrictMode>
  //       <AppThemeProvider>
  //         <SafeAreaProvider>
  //           <SafeArea>
  //             <Storybook />
  //             <StorybookButton onPress={() => setStorybookClosed(true)}>
  //               <StorybookButtonText>OPEN APP</StorybookButtonText>
  //             </StorybookButton>
  //           </SafeArea>
  //         </SafeAreaProvider>
  //       </AppThemeProvider>
  //     </StrictMode>
  //   )
  // }

  return (
    <StrictMode>
      <AppThemeProvider>
        <NavigationContainer>
          <SafeAreaProvider>
            <SafeArea>
              <AppNavigation />
            </SafeArea>
          </SafeAreaProvider>
        </NavigationContainer>
      </AppThemeProvider>
    </StrictMode>
  )
}
