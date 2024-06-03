import { Plus } from "phosphor-react-native";
import { Label, NewMealButton, NewMealContainer, Text } from "./styles";

export function NewMeal() {

  return (
    <NewMealContainer>
      <Label>
        Refeições
      </Label>
      <NewMealButton>
        <Plus 
          size={24}
          color="#ffffff"
        />
        <Text>
          Nova refeição
        </Text>
      </NewMealButton>

    </NewMealContainer>
  )
}