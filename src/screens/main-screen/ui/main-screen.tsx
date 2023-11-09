import React from 'react'
import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
  align-item: center;
  justify-content: center;
  padding: 16px;
`

export const MainScreen = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore

  return (
    <Wrapper>
      <Typography variant="largeTitle" align="center">
        Главная
      </Typography>
    </Wrapper>
  )
}
