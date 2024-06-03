import styled from "styled-components/native";

interface GeneralScoreContainerProps {
  isNegative: boolean
}

export const GeneralScoreContainer = styled.TouchableOpacity<GeneralScoreContainerProps>`
  background-color: ${({ theme, isNegative }) => isNegative ? theme.COLORS.RED_100 : theme.COLORS.GREEN_100};

  align-items: center;
  text-align: center;
  padding: 20px 16px;
  border-radius: 8px;
  position: relative;
`

export const ValueScore = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`