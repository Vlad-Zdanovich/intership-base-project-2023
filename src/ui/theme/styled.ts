import styledComponents, {
  ReactNativeStyledInterface,
} from 'styled-components/native'

import { darkTheme } from './dark'

export const styled: ReactNativeStyledInterface<typeof darkTheme> =
  styledComponents as any
