import { useTheme } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`

export const Message = styled.Text`
  text-align: center;

  font-size: ${() => useTheme().FONT_SIZE.SM}px;
  font-family: ${() => useTheme().FONT_FAMILY.REGULAR};
  color: ${() => useTheme().COLORS.GRAY_300};  
`