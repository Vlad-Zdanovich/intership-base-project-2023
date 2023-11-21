import React from 'react'
import { styled } from '@shared/ui/theme'
import { Typography } from '@shared/ui/atoms'
import { useTheme } from '@shared/hooks'
import { IconCardMasterCard, IconChevronDown } from '@shared/ui/icons'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.secondary};
`

const CardWrapper = styled.View`
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
  padding-left: 16px;
`

const Title = styled(Typography)`
  padding: 16px;
  color: ${({ theme }) => theme.palette.text.tertiary};
  background: ${({ theme }) => theme.palette.background.secondary};
`

const CardTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.accent.tertiary};
  padding-bottom: 3px;
`

const CardValue = styled(Typography)`
  color: ${({ theme }) => theme.palette.accent.tertiary};
`

const IconWrapper = styled.View`
  flex: 1;
  align-self: center;
  flex-direction: column;
`

const IconDown = styled(IconChevronDown)`
  align-self: flex-end;
`

type CardItemProps = {
  type: 'mastercard' | 'visa'
  name: string
  value: string
}

export const CardItem = ({ name, value }: CardItemProps) => {
  const theme = useTheme()

  return (
    <Wrapper>
      <Title variant="body15Semibold">Карта для оплаты</Title>
      <CardWrapper>
        <IconCardMasterCard />
        <TextWrapper>
          <CardTitle variant="body15Regular">{name}</CardTitle>
          <CardValue variant="caption1">{value}</CardValue>
        </TextWrapper>

        <IconWrapper>
          <IconDown color={theme.palette.content.tertiary} />
        </IconWrapper>
      </CardWrapper>
    </Wrapper>
  )
}
