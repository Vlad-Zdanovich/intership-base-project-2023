import { styled } from '@shared/ui/theme'
import { IconCheck, IconClose } from '@shared/ui/icons'
import { Typography } from '@shared/ui/atoms'
import { PrimaryButton } from '@shared/ui/molecules'
import { useTheme } from '@shared/hooks'
import { useMemo } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Wrapper = styled.View<{ topPadding: number; bottomPadding: number }>`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
  padding: 16px;
  padding-top: ${({ topPadding }) => topPadding}px;
  padding-bottom: ${({ bottomPadding }) => bottomPadding}px;
`

const IconCircleWrapper = styled.View`
  background: rgba(112, 109, 118, 0.1);
  width: 150px;
  height: 150px;
  justify-content: center;
  flex-shrink: 0;
  align-items: center;
  border-radius: 75px;
`

const IconCircle = styled.View`
  background: rgba(112, 109, 118, 0.1);
  width: 112px;
  height: 112px;
  justify-content: center;
  flex-shrink: 0;
  align-items: center;
  border-radius: 56px;
`

const IconWrapper = styled.View<{ isSucceeded: boolean }>`
  background: ${({ theme, isSucceeded }) => {
    return isSucceeded
      ? theme.palette.indicator.done
      : theme.palette.indicator.error
  }};
  opacity: 1;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 35px;
`

const ContentWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const AmountTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.content.tertiary};
  margin-top: 16px;
`

const AmountText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-top: 8px;
`

const DoneButton = styled(PrimaryButton)``

type PaymentStatusProps = {
  amount: number
  isSucceeded: boolean
  onDoneButtonClick: () => void
}

export const PaymentStatus = ({
  amount,
  isSucceeded,
  onDoneButtonClick,
}: PaymentStatusProps) => {
  const { top, bottom } = useSafeAreaInsets()
  const theme = useTheme()

  const amountStr = useMemo(() => `${amount} ₽`, [amount])

  return (
    <Wrapper topPadding={top} bottomPadding={bottom}>
      <ContentWrapper>
        <IconCircleWrapper>
          <IconCircle>
            <IconWrapper isSucceeded={isSucceeded}>
              {isSucceeded ? (
                <IconCheck size={40} color={theme.palette.button.secondary} />
              ) : (
                <IconClose size={40} color={theme.palette.button.secondary} />
              )}
            </IconWrapper>
          </IconCircle>
        </IconCircleWrapper>

        <AmountTitle variant="body17Regular">Оплачено</AmountTitle>
        <AmountText variant="title">{amountStr}</AmountText>
      </ContentWrapper>

      <DoneButton onPress={onDoneButtonClick}>Готово</DoneButton>
    </Wrapper>
  )
}
