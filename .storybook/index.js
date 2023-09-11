import { AppRegistry } from 'react-native'

import StorybookApp from './Storybook'
import { name as appName } from '../src/app/app.json'

AppRegistry.registerComponent(appName, () => StorybookApp)
