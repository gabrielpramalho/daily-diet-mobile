import styled from "styled-components/native";

export const NewMealContainer = styled.View`
  gap: 8px;
`
export const NewMealButton = styled.TouchableOpacity`
  flex-direction: row;
  padding: 16px 24px;

  justify-content: center;
  align-items: center;
  gap: 12px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 6px;
`

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: 16px;
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 16px;
`