import { Flag, FlagProps, MealItemContainer, Time, TimeContainer, Title } from "./styles";

interface MealItemProps {
  hour: string
  name: string
  status: "inside" | "outside"
}

export function MealItem({ hour, name, status }: MealItemProps) {
  return (
    <MealItemContainer>
      <TimeContainer>
        <Time>
          {hour}
        </Time>
      </TimeContainer>

      <Title numberOfLines={1} >
        {name}
      </Title>

      <Flag status={status} />

    </MealItemContainer>
  )
}