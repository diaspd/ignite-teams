import { SafeAreaView } from "react-native-safe-area-context";
import styled, { useTheme } from "styled-components/native";

import { UsersThree } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;

  background-color: ${() => useTheme().COLORS.GRAY_600};  
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;

  margin-top: -100px;
`

export const Icon = styled(UsersThree).attrs(() => ({
  size: 56,
  color: useTheme().COLORS.GREEN_700 
}))`
  align-self: center;
`

