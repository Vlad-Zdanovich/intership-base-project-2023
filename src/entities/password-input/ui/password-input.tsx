import React, { Dispatch, memo, SetStateAction, useState } from 'react'
import { styled } from '@shared/ui/theme'
import { IconEyeOff, IconEye, IconLock } from '@shared/ui/icons'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.content.primary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 24px 14px;
  border-radius: 26px;
  height: 52px;
`

const IconWrapper = styled.View`
  height: 24px;
  width: 24px;
  margin-left: 16px;
  border-radius: 12px;
`

const RightItemWrapper = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  margin-right: 16px;
`

const PasswordInputView = styled.TextInput`
  color: ${({ theme }) => theme.palette.text.primary};
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
  font-family: SF Pro Text;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.24px;
`

type PasswordInputrops = {
  password: string
  setPassword: Dispatch<SetStateAction<string>>
}

export const PasswordInput = memo(
  ({ password, setPassword }: PasswordInputrops) => {
    const [isSecureEnter, setIsSecureEnter] = useState(true)

    return (
      <Wrapper>
        <IconWrapper>
          <IconLock color="#6C78E6" />
        </IconWrapper>

        <PasswordInputView
          value={password}
          secureTextEntry={isSecureEnter}
          onChangeText={setPassword}
        />
        <RightItemWrapper onPress={() => setIsSecureEnter((prev) => !prev)}>
          {isSecureEnter ? (
            <IconEyeOff color="#706D76" />
          ) : (
            <IconEye color="#706D76" />
          )}
        </RightItemWrapper>
      </Wrapper>
    )
  },
)

PasswordInput.displayName = 'PasswordInput'
