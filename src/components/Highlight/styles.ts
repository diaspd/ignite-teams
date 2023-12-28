import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  text-align: center;

  font-size: ${({ theme }: DefaultTheme) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }: DefaultTheme) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }: DefaultTheme) => theme.COLORS.WHITE};
`;

export const Subtitle = styled.Text`
  text-align: center;

  font-size: ${({ theme }: DefaultTheme) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }: DefaultTheme) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }: DefaultTheme) => theme.COLORS.GRAY_300};
`;