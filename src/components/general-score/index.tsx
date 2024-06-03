import { ArrowUpRight } from "phosphor-react-native";
import { GeneralScoreContainer, Text, ValueScore } from "./styles";
import { useTheme } from "styled-components/native";


interface GeneralScore {
  isNegative?: boolean
}

export function GeneralScore({ isNegative = false }: GeneralScore) {
  const theme = useTheme()

  return (
    <GeneralScoreContainer isNegative={isNegative}>
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