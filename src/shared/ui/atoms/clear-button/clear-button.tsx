import { PressableProps } from 'react-native/types'
import { IconClose } from '@shared/ui/icons'
import { styled } from '@shared/ui/theme'
import { useTheme } from '@shared/hooks'

const Wrapper = styled.Pressable`
  padding: 2px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.text.secondary};
  justify-content: center;
  align-items: center;
`

type Props = PressableProps & {
  size: number
}

export const ClearButton = ({ size, ...props }: Props) => {
  const theme = useTheme()

  return (
    <Wrapper {...props}>
      <IconClose size={size} color={theme.palette.text.tertiary} />
    </Wrapper>
  )
}
