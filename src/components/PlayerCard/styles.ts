import { MaterialIcons } from '@expo/vector-icons';

import styled, { css, useTheme } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${() => useTheme().COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  
  margin-bottom: 16px;
`;

export const Name = styled.Text`
  flex: 1;
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.MD}px;
    color: ${useTheme().COLORS.GRAY_200};
    font-family: ${useTheme().FONT_FAMILY.REGULAR};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(() => ({
  size: 24,
  color: useTheme().COLORS.GRAY_200
}))`
  margin-left: 16px;
  margin-right: 4px;
`;