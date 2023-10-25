import styledComponents, {
  ReactNativeStyledInterface,
} from 'styled-components/native'

import { Theme } from './types'

export const styled: ReactNativeStyledInterface<Theme> = styledComponents as any
