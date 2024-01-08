import { SafeAreaView } from "react-native-safe-area-context";
import styled, { useTheme } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${() => useTheme().COLORS.GRAY_600};
  padding: 24px;
`;