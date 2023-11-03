import { IconSearch } from '@shared/ui/icons'
import { TextInputProps } from 'react-native/types'
import { useCallback } from 'react'
import { ClearButton } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'

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

type Props = TextInputProps

export const SearchBar = (props: Props) => {
  const onClearButtonClick = useCallback(() => {
    props.onChangeText?.('')
  }, [props])

  return (
    <Wrapper>
      <IconSearch />
      <SearchInput {...props} />

      {props.value && <ClearButton size={12} onPress={onClearButtonClick} />}
    </Wrapper>
  )
}
