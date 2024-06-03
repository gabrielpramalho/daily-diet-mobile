import { Flag, MealItemContainer, Time, TimeContainer, Title } from "./styles";

export function MealItem() {
  return (
    <MealItemContainer>
      <TimeContainer>
        <Time>
          20:00  
        </Time>
      </TimeContainer>

      <Title numberOfLines={1} >
        X-Tudo X-Tudo X-Tudo X-Tudo X-Tudo X-Tudo X-Tudo
      </Title>

      <Flag status="inside" />

    </MealItemContainer>
  )
}