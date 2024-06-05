import styled from "styled-components/native";

export const MealItemContainer = styled.TouchableOpacity`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  flex-direction: row;

  border-radius: 6px;
  padding: 14px 16px;
  margin-bottom: 8px;
`

export const Time = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};

  position: relative;
`

export const Title = styled.Text`
  flex: 1;
  padding: 0 12px;
`
export const TimeContainer = styled.View`
  padding-right: 12px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-top-width: 0;
  border-bottom-width: 0;
  border-left-width: 0;
`

export interface FlagProps {
  status: 'inside' | 'outside'
}

export const Flag = styled.View<FlagProps>`
  background-color: ${({ theme, status }) => status === 'inside' ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};

  height: 14px;
  width: 14px;
  border-radius: 99px;
`
