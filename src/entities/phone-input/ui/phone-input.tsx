import React, {
  Dispatch,
  SetStateAction,
  memo,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from 'react'
import { Image, TextInput } from 'react-native'
import { styled } from '@shared/ui/theme'
import { useTheme } from '@shared/hooks'
import MaskInput from 'react-native-mask-input'
import { PHONE_MASK } from '@shared/atoms'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.content.primary};
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 24px 14px;
  border-radius: 26px;
`

const IconWrapper = styled.View`
  height: 24px;
  width: 24px;
  margin-left: 16px;
  border-radius: 12px;
`

const RightItemWrapper = styled.View`
  height: 24px;
  width: 24px;
  margin-right: 16px;
`

const PhoneInputView = styled(MaskInput)`
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

type CardItemProps = {
  icon: string | ReactNode
  phone: string
  isFocused: boolean
  setPhone: Dispatch<SetStateAction<string>>
  setFocus: Dispatch<SetStateAction<boolean>>
  rightItem?: ReactNode
}

export const PhoneInput = memo(
  ({
    icon,
    phone,
    isFocused,
    setPhone,
    setFocus,
    rightItem,
  }: CardItemProps) => {
    const inputRef = useRef<TextInput | null>(null)
    const theme = useTheme()

    const onFocus = useCallback(() => {
      setFocus(true)
    }, [setFocus])

    const onEndEditing = useCallback(() => {
      setFocus(false)
    }, [setFocus])

    useEffect(() => {
      if (isFocused) {
        inputRef.current?.focus()
      } else {
        inputRef.current?.blur()
      }
    }, [isFocused])

    return (
      <Wrapper>
        <IconWrapper>
          {typeof icon === 'string' ? <Image source={{ uri: icon }} /> : icon}
        </IconWrapper>

        <PhoneInputView
          ref={inputRef}
          value={phone}
          onChangeText={(masked: string, unmasked: string) => {
            setPhone(unmasked)
          }}
          keyboardType="phone-pad"
          placeholder="Номер телефона"
          placeholderTextColor={theme.palette.text.tertiary}
          mask={PHONE_MASK}
          maxLength={PHONE_MASK.length}
          onFocus={onFocus}
          onEndEditing={onEndEditing}
        />
        <RightItemWrapper>{rightItem}</RightItemWrapper>
      </Wrapper>
    )
  },
)
