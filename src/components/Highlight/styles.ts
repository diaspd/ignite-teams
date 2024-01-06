import styled, { useTheme } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  text-align: center;

  font-size: ${() => useTheme().FONT_SIZE.XL}px;
  font-family: ${() => useTheme().FONT_FAMILY.BOLD};
  color: ${() => useTheme().COLORS.WHITE};
`;

export const Subtitle = styled.Text`
  text-align: center;

  font-size: ${() => useTheme().FONT_SIZE.MD}px;
  font-family: ${() => useTheme().FONT_FAMILY.REGULAR};
  color: ${() => useTheme().COLORS.GRAY_300};
`;