import styled, { useTheme } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${() => useTheme().COLORS.GRAY_600};
  padding: 24px;
`;