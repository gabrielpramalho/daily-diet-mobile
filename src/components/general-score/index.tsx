import { ArrowUpRight } from "phosphor-react-native";
import { GeneralScoreContainer, Text, ValueScore } from "./styles";
import { useTheme } from "styled-components/native";
import { TouchableOpacityProps } from "react-native";


type GeneralScore = TouchableOpacityProps & {
  isNegative?: boolean
}

export function GeneralScore({ isNegative = false, ...props }: GeneralScore) {
  const theme = useTheme()

  return (
    <GeneralScoreContainer {...props} isNegative={isNegative}>
      <ValueScore>90,86%</ValueScore>
      <Text>das refeições dentro da dieta</Text>

      <ArrowUpRight 
        size={24}
        color={theme.COLORS.GREEN_500}
        style={{ position: 'absolute', top: 8, right: 8 }}
      />
    </GeneralScoreContainer>
  )
}