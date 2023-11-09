import React from 'react'
import { styled } from '@shared/ui/theme'

export const Separator = styled.View<{
  color?: string
}>`
  background: ${({ theme, color }) => color ? color : theme.palette.content.secondary};
  height: 1px;
`
