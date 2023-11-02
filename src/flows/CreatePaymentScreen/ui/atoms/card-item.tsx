import React, { useLayoutEffect } from 'react'
import { styled } from '@shared/ui/theme'
import { Typography } from '@shared/ui/atoms'
import { useTheme } from '@shared/hooks'
import { IconCardMasterCard, IconChevronDown } from '@shared/ui/icons'
import { View } from 'react-native'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.secondary};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 72px;
  padding: 16px;
`

const TextWrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.secondary};
  justify-content: center;
  aligns-content: center;
  padding-left: 16px;
`

type CardItemProps = {
  type: 'mastercard' | 'visa'
  name: string
  value: string
}

export const CardItem = ({ type, name, value }: CardItemProps) => {
  const theme = useTheme()

  return (
    <Wrapper>
      <IconCardMasterCard />
      <TextWrapper>
        <Typography
          variant="body15Regular"
          style={{ color: theme.palette.accent.tertiary, paddingBottom: 3 }}
        >
          {name}
        </Typography>
        <Typography
          variant="caption1"
          style={{ color: theme.palette.accent.tertiary }}
        >
          {value}
        </Typography>
      </TextWrapper>

      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          flexDirection: 'column',
        }}
      >
        <IconChevronDown
          style={{ alignSelf: 'flex-end' }}
          color={theme.palette.content.tertiary}
        />
      </View>
    </Wrapper>
  )
}
