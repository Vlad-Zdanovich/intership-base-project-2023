import React, { Dispatch, SetStateAction, memo, ReactNode } from 'react'
import { Image } from 'react-native'
import { styled } from '@shared/ui/theme'
import { useTheme } from '@shared/hooks'
import MaskInput from 'react-native-mask-input'
import { PHONE_MASK } from '@shared/atoms'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.content.primary};
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 24px 14px;
  border-radius: 26px;
`

const IconWapper = styled.View`
  height: 24px;
  width: 24px;
  margin-left: 16px;
  border-radius: 12px;
`

const PhoneInputView = styled(MaskInput)`
  color: ${({ theme }) => theme.palette.text.primary};
  padding-left: 16px;
  padding-right: 16px;
  font-family: SF Pro Text;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.24px;
`

type CardItemProps = {
  icon: string | ReactNode
  phone: string
  setPhone: Dispatch<SetStateAction<string>>
}

export const PhoneInput = memo(({ icon, phone, setPhone }: CardItemProps) => {
  const theme = useTheme()

  return (
    <Wrapper>
      <IconWapper>
        {typeof icon === 'string' ? <Image source={{ uri: icon }} /> : icon}
      </IconWapper>

      <PhoneInputView
        value={phone}
        onChangeText={(masked: string) => {
          setPhone(masked)
        }}
        keyboardType="phone-pad"
        placeholder="Номер телефона"
        placeholderTextColor={theme.palette.text.tertiary}
        mask={PHONE_MASK}
      />
    </Wrapper>
  )
})
