import { Text } from "react-native";
import { HomeContainer } from "./styles";
import { Header } from "@/components/header";
import { GeneralScore } from "@/components/general-score";
import { NewMeal } from "@/components/new-meal";
import { MealItem } from "@/components/meal-item";

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <GeneralScore/>

      <NewMeal />

      <MealItem />
    </HomeContainer>
  )
}