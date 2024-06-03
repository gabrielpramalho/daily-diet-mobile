import styled from "styled-components/native";

export const AvatarContainer = styled.View`
  min-height: 40px;
  min-width: 40px;

  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 99px;
`

export const AvatarImage = styled.Image`
  object-fit: contain;
  border-radius: 99px;
  min-height: 40px;
  min-width: 40px;
`