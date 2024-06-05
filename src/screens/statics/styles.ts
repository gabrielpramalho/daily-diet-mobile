import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface StaticsContainerProps {
  isNegative: boolean
}

export const StaticsContainer = styled(SafeAreaView)<StaticsContainerProps>`
  flex: 1;
  background-color: ${({ theme, isNegative }) => isNegative ? theme.COLORS.RED_100 : theme.COLORS.GREEN_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 16px;
`