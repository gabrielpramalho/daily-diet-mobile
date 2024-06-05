import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

  padding: 32px 24px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`

export const Title = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 14px;
`

export const Wrapper = styled.View`
  gap: 12px;
  width: 100%;
`
export const WrapperHorizontal = styled.View`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: row;
  gap: 12px;
  width: 100%;
`