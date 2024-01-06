import styled, { useTheme } from "styled-components/native";

export const Container = styled.View`
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