import styled, { DefaultTheme } from "styled-components/native";

import { CaretLeft } from 'phosphor-react-native';

export const Container = styled.View`
  width: 100%;

  flex-direction: row;

  justify-content: center;
  align-items: center;
`

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`

export const BackIcon = styled(CaretLeft).attrs(({theme}: DefaultTheme) => ({
  size: 36,
  color: theme.COLORS.WHITE,
}))`
`

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`