import React from 'react'
import { styled } from '@shared/ui/theme'
import { PrimaryButton } from '@shared/ui/molecules'
import { Typography } from '@shared/ui/atoms'
import { IconAuthError, IconAuthSuccess, IconClose } from '@shared/ui/icons'
import { useTheme } from '@shared/hooks'
import { useMemo } from 'react'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
  padding: 24px 16px;
`

const ContentWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const TitleText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-top: 32px;
`

const MessageText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-top: 16px;
`

const CloseButton = styled.Pressable`
  position: absolute;
  top: 0;
  left: 16px;
`

type AuthSuccsessScreenProps = {
  isSucceeded: boolean
  onCloseButtonClick: () => void
  onButtonClick: () => void
}

export const AuthSuccsessScreen = ({
  isSucceeded,
  onCloseButtonClick,
  onButtonClick,
}: AuthSuccsessScreenProps) => {
  const theme = useTheme()

  const titleText = useMemo(
    () => (isSucceeded ? 'Все готово' : 'Внимание'),
    [isSucceeded],
  )

  const messageText = useMemo(() => {
    return isSucceeded
      ? 'Теперь вы можете использовать мобильное приложение Kode bank'
      : 'Сервер временно недоступен. Пожалуйста, повторите попытку позднее'
  }, [isSucceeded])

  const buttonText = useMemo(
    () => (isSucceeded ? 'Продолжить' : 'Повторить'),
    [isSucceeded],
  )

  return (
    <Wrapper>
      <ContentWrapper>
        {isSucceeded ? (
          <IconAuthSuccess size={148} />
        ) : (
          <IconAuthError size={148} />
        )}
        <TitleText variant="subtitle">{titleText}</TitleText>
        <MessageText variant="body15Regular" align="center">
          {messageText}
        </MessageText>
      </ContentWrapper>

      <PrimaryButton onPress={onButtonClick}>{buttonText}</PrimaryButton>

      {!isSucceeded && (
        <CloseButton onPress={onCloseButtonClick}>
          <IconClose size={24} color={theme.palette.button.secondary} />
        </CloseButton>
      )}
    </Wrapper>
  )
}
