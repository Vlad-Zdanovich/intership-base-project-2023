import React from 'react'
import { FlatList } from 'react-native'
import { styled } from '@shared/ui/theme'
import { useTheme } from '@shared/hooks'
import { StyleProp, ViewStyle } from 'react-native/types'
import { Typography } from '@shared/ui/atoms'

const Wrapper = styled.View`
  height: 28px;
`

const ChipsWrapper = styled.TouchableOpacity`
  background: ${({ theme }) => theme.palette.content.secondary};
  justify-content: center;
  align-content: center;
  border-radius: 14px;
  height: 28px;
  margin-right: 16px;
`

const Chips = styled(Typography)`
  margin-horizontal: 16px;
  margin-vertical: 8px;
`

type ChipsSelectionProps = {
  style?: StyleProp<ViewStyle>
  onChipsTapped: (value: number) => void
}

export const ChipsSelection = ({
  style,
  onChipsTapped,
}: ChipsSelectionProps) => {
  const theme = useTheme()

  const data = [100, 200, 300, 400, 500, 1000]

  return (
    <Wrapper style={style}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={(item) => (
          <ChipsWrapper onPress={() => onChipsTapped(item.item)}>
            <Chips variant="caption1" children={`${item.item} ₽`} />
          </ChipsWrapper>
        )}
        horizontal={true}
      />
    </Wrapper>
  )
}
