import { StatusBar } from 'react-native'
import { getStorybookUI } from '@storybook/react-native'

import './storybook.requires'

StatusBar.setBarStyle('dark-content')

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({})

// eslint-disable-next-line import/no-default-export
export default StorybookUIRoot
