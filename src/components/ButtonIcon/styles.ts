import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native';

import styled, { useTheme } from 'styled-components/native';

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type ButtonIconStyleProps = {
  type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;
  
  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs(({ type }: ButtonIconStyleProps) => ({
  size: 24,
  color: type === 'PRIMARY' ? useTheme().COLORS.GREEN_700 : useTheme().COLORS.RED
}))``;