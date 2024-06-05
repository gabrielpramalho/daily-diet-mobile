import { SectionList, Text } from "react-native";
import { HomeContainer, SectionListHeader } from "./styles";
import { Header } from "@/components/header";
import { GeneralScore } from "@/components/general-score";
import { NewMeal } from "@/components/new-meal";
import { MealItem } from "@/components/meal-item";
import { useNavigation } from "@react-navigation/native";

export interface mealsSchema {
  title: string
  data: {
    hour: string
    name: string
    status: 'inside' | 'outside'
  }[]
}

export function Home() {

  const navigation = useNavigation()

  const meals: mealsSchema[] = [
    {
      title: '12.08.24',
      data: [
        {
          hour: '20:00',
          name: 'X-tudo',
          status: 'outside'
        },
        {
          hour: '16:00',
          name: 'Whey protein com leite',
          status: "inside"
        },
        {
          hour: '12:30',
          name: 'Salada cesar com frango grelhado',
          status: "inside"
        },
      ]
    },
    {
      title: '11.08.24',
      data: [
        {
          hour: '20:00',
          name: 'X-tudo',
          status: 'outside'
        },
        {
          hour: '16:00',
          name: 'Whey protein com leite',
          status: "inside"
        },
        {
          hour: '12:30',
          name: 'Salada cesar com frango grelhado',
          status: "inside"
        },
      ]
    },
    {
      title: '10.08.24',
      data: [
        {
          hour: '20:00',
          name: 'X-tudo',
          status: 'outside'
        },
        {
          hour: '16:00',
          name: 'Whey protein com leite',
          status: "inside"
        },
        {
          hour: '12:30',
          name: 'Salada cesar com frango grelhado',
          status: "inside"
        },
      ]
    }
  ]

  function handleOpenStatics() {
    navigation.navigate('statics')
  }

  return (
    <HomeContainer>
      <Header />

      <GeneralScore onPress={handleOpenStatics} />

      <NewMeal />

      <SectionList 
        sections={meals}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({item}) => (
          <MealItem 
            hour={item.hour}
            name={item.name}
            status={item.status}
          />
        )}
        renderSectionHeader={({section: {title}}) => (
          <SectionListHeader>{title}</SectionListHeader>
        )}
        stickySectionHeadersEnabled={false}
      />
      
    </HomeContainer>
  )
}