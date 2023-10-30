import React from 'react'
import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'
import { PaymentType } from '@shared/atoms/payment-type'
import { Icon1Internet, Icon1JKH, Icon1Mobile } from '@shared/ui/icons'
import { useTheme } from '@shared/hooks'

const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  height: 68px;
`

const IconWrapper = styled.View`
  background: ${({ theme }) => theme.palette.content.secondary};
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin: 14px 16px;
`

export type PaymentsItemProps = {
  type: PaymentType
  onPress: (type: PaymentType) => void
}

export const PaymentsItem = ({ type, onPress }: PaymentsItemProps) => {
  const theme = useTheme()

  const getText = () => {
    switch (type) {
      case 'mobile':
        return 'Мобильная связь'
      case 'hcs':
        return 'ЖКХ'
      case 'internet':
        return 'Интернет'
    }
  }

  const getIcon = () => {
    switch (type) {
      case 'mobile':
        return <Icon1Mobile color={theme.palette.accent.primary} />
      case 'hcs':
        return <Icon1JKH color={theme.palette.accent.primary} />
      case 'internet':
        return <Icon1Internet color={theme.palette.accent.primary} />
    }
  }

  return (
    <Wrapper onPress={() => onPress(type)}>
      <IconWrapper>{getIcon()}</IconWrapper>
      <Typography variant="body15Regular" style={{ alignSelf: 'center' }}>
        {getText()}
      </Typography>
    </Wrapper>
  )
}
