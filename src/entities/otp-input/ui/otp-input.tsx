import { useTheme } from '@shared/hooks'
import { styled } from '@shared/ui/theme'
import { useEffect, useMemo } from 'react'
import { OTPItem } from './atoms'

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: 6px;
`

const MiddleInputsSeparator = styled.View<{ color: string }>`
  width: 10px;
  height: 2px;
  background-color: ${({ color }) => color};
`

type Props = {
  otpCode: string
  otpLen: number
  isValid: boolean
}

export const OTPInputs = ({ otpCode, otpLen, isValid }: Props) => {
  const theme = useTheme()

  const otpArr = useMemo(() => new Array(otpLen).fill(0), [otpLen])

  const middleInputIndex = useMemo(() => otpLen / 2 - 1, [otpLen])

  const otpValues = useMemo(() => otpCode.split(''), [otpCode])

  const separatorColor = useMemo(() => {
    if (!isValid) {
      return theme.palette.indicator.error
    }

    if (otpValues[middleInputIndex + 1] !== undefined) {
      return theme.palette.text.primary
    }

    return theme.palette.content.tertiary
  }, [otpValues, middleInputIndex, isValid, theme])

  return (
    <Wrapper>
      {otpArr.map((_, index) => {
        return (
          <>
            <OTPItem
              value={otpValues[index] ?? ''}
              isValid={isValid}
              isFocused={
                otpValues.length === index && otpValues[index] === undefined
              }
              key={index}
            />
            {index === middleInputIndex ? (
              <MiddleInputsSeparator color={separatorColor} />
            ) : null}
          </>
        )
      })}
    </Wrapper>
  )
}
