import { styled } from '@shared/ui/theme'

const Wrapper = styled.ScrollView`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
`

export const AuthOTPScreen = () => {
  return <Wrapper />
}
