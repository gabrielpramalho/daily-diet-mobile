import styled, { css } from "styled-components/native";

interface ContainerProps {
  variant: 'default' | 'positive' | 'negative'
}

export const Container = styled.View<ContainerProps>`
  padding: 16px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;

  ${({ variant, theme }) => variant === "default" && css`
    background-color: ${theme.COLORS.GRAY_200};
  `}
  ${({ variant, theme }) => variant === "negative" && css`
    background-color: ${theme.COLORS.RED_100};
  `}
  ${({ variant, theme }) => variant === "positive" && css`
    background-color: ${theme.COLORS.GREEN_100};
  `}
`

export const Title = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`
export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`