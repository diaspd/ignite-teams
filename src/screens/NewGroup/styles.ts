import styled from "styled-components/native";
import { useTheme } from "styled-components";

import { UsersThree } from "phosphor-react-native";
import { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;

  background-color: ${() => useTheme().COLORS.GRAY_600};  
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;

  margin-top: -100px;
`

export const Icon = styled(UsersThree).attrs(({ theme }: DefaultTheme) => ({
  size: 56,
  color: theme.COLORS.GREEN_700 
}))`
  align-self: center;
`

