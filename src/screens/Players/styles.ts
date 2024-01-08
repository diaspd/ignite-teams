import { SafeAreaView } from "react-native-safe-area-context";
import styled, { useTheme, css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;

  background-color: ${() => useTheme().COLORS.GRAY_600};  
`

export const Form = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  
  border-radius: 6px;

  background-color: ${() => useTheme().COLORS.GRAY_700};  
`

export const HeaderList = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  margin: 32px 0 12px;
`

export const NumberOfPlayers = styled.Text`
  padding-left: 12px;
  ${() => css`
    font-family: ${useTheme().FONT_FAMILY.BOLD};
    font-size: ${useTheme().FONT_SIZE.SM}px;
    color: ${useTheme().COLORS.GRAY_200};
  `}
`