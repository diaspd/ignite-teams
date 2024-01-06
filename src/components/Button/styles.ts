import { TouchableOpacity } from "react-native";

import styled, { useTheme, DefaultTheme, css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type ButtonStyleProps = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <ButtonStyleProps>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ type }: ButtonStyleProps) => 
    type === 'PRIMARY' ? useTheme().COLORS.GREEN_700 : useTheme().COLORS.RED_DARK
  };

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`