import { IconClose, IconSearch } from '@shared/ui/icons'
import { TextInputProps } from 'react-native/types'
import { useCallback } from 'react'
import { styled } from '@shared/ui/theme'
import { useTheme } from '@shared/hooks'

const Wrapper = styled.View`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.content.secondary};
  flex-direction: row;
  align-items: center;
  padding: 6px 8px;
`

const SearchInput = styled.TextInput`
  color: ${({ theme }) => theme.palette.text.primary};
  flex: 1;
  font-size: 15px;
  margin-left: 4px;
  margin-right: 4px;
`

const ClearButton = styled.TouchableOpacity`
  padding: 2px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.text.secondary};
  justify-content: center;
  align-items: center;
`

type Props = TextInputProps

export const SearchBar = (props: Props) => {
  const theme = useTheme()
  const onClearButtonClick = useCallback(() => {
    props.onChangeText?.('')
  }, [props])

  return (
    <Wrapper>
      <IconSearch />
      <SearchInput {...props} />

      {props.value && (
        <ClearButton onPress={onClearButtonClick}>
          <IconClose size={12} color={theme.palette.text.tertiary} />
        </ClearButton>
      )}
    </Wrapper>
  )
}
