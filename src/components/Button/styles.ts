import { TouchableOpacity } from "react-native";

import styled, { useTheme, css } from 'styled-components/native';

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
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.MD}px;
    color: ${useTheme().COLORS.WHITE};
    font-family: ${useTheme().FONT_FAMILY.BOLD};
  `}
`