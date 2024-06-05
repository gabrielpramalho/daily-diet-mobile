import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const HomeContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 16px;
  padding: 0 24px;
  gap: 32px;
`

export const SectionListHeader = styled.Text`
  margin-bottom: 8px;
  
  margin-top: 24px;

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 18px;
`