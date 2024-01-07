import { TouchableOpacity } from 'react-native';

import styled, { useTheme, css } from 'styled-components/native';

export type FilterStyleProps = {
  isActive?: boolean;
}

export const Container = styled(TouchableOpacity)`
  ${({ isActive }: FilterStyleProps) => isActive && css`
    border: 1px solid ${useTheme().COLORS.GREEN_700};
  `};

  border-radius: 4px;
  margin-right: 12px;
  margin-top: 4px;

  height: 38px;
  width: 70px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  
  ${() => css`
    font-family: ${useTheme().FONT_FAMILY.BOLD};
    font-size: ${useTheme().FONT_SIZE.SM}px;
    color: ${useTheme().COLORS.WHITE};
  `}
`