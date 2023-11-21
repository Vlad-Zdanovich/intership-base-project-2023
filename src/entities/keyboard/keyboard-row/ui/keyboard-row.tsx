import React from 'react'
import { styled } from '@shared/ui/theme'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
`

export const KeyboardRow = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>
}
