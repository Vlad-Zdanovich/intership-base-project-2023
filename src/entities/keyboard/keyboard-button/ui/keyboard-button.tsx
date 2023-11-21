import React from 'react'
import { styled } from '@shared/ui/theme'
import { useCallback } from 'react'
import { IconDelete } from '@shared/ui/icons'
import { useTheme } from '@shared/hooks'
import { TKeyboardButton, TKeyboardPress } from '@entities/keyboard/lib'
import { Typography } from '@shared/ui/atoms'

type Props = TKeyboardButton & {
  onKeyPress: TKeyboardPress
}

const Wrapper = styled.TouchableOpacity`
  flex: 1;
  height: 68px;
  justify-content: center;
  align-items: center;
  padding: 16px;
`

const ButtonText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`

const StyledIconDelete = styled(IconDelete)``

export const KeyboardButton = ({
  value,
  type = 'default',
  onKeyPress,
}: Props) => {
  const theme = useTheme()

  const onPress = useCallback(() => {
    onKeyPress({ value, type })
  }, [onKeyPress, value, type])

  return (
    <Wrapper onPress={onPress}>
      {type === 'delete' && (
        <StyledIconDelete size={24} color={theme.palette.text.primary} />
      )}
      {(type === 'default' || type === 'cancel' || type === 'timer') && (
        <ButtonText
          variant={type === 'default' ? 'keyboardButton' : 'caption1'}
          align="center"
        >
          {value}
        </ButtonText>
      )}
    </Wrapper>
  )
}
