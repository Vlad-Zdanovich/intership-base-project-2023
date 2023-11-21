import React from 'react'
import { styled } from '@shared/ui/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Animated } from 'react-native'

import { TKeyboardButton, TKeyboardPress, useHeightAnimation } from '../lib'
import { KeyboardRow } from '../keyboard-row'
import { KeyboardButton } from '../keyboard-button'

type Props = {
  buttonList: TKeyboardButton[][]
  isShowing: boolean
  onKeyPress: TKeyboardPress
}

const Wrapper = styled(Animated.View)<{
  isShowing: boolean
  bottomPadding: number
}>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0px;
  height: 300px;
  background-color: ${({ theme }) => theme.palette.background.primary};
  padding-bottom: ${({ bottomPadding }) => bottomPadding}px;
`

export const Keyboard = ({ buttonList, isShowing, onKeyPress }: Props) => {
  const { bottom } = useSafeAreaInsets()
  const { height } = useHeightAnimation({ toValue: -300, isShowing })

  return (
    <Wrapper
      style={{ bottom: height }}
      isShowing={isShowing}
      bottomPadding={bottom}
    >
      {buttonList.map((row, rowIndex) => {
        return (
          <KeyboardRow key={rowIndex.toString()}>
            {row.map((button, buttonIndex) => {
              return (
                <KeyboardButton
                  key={buttonIndex.toString()}
                  value={button.value}
                  type={button.type}
                  onKeyPress={onKeyPress}
                />
              )
            })}
          </KeyboardRow>
        )
      })}
    </Wrapper>
  )
}
