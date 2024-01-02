import { TouchableOpacity } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";
import { UsersThree } from 'phosphor-react-native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${({ theme }: DefaultTheme) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-bottom: 12px;
`

export const Title = styled.Text`
  font-size: ${({ theme }: DefaultTheme) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }: DefaultTheme) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }: DefaultTheme) => theme.FONT_FAMILY.REGULAR};
`

export const Icon = styled(UsersThree).attrs(({ theme }: DefaultTheme) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: 'fill',
}))`
  margin-right: 20px;
`