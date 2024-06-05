import { Home } from "@/screens/home"
import { Statics } from "@/screens/statics"
import { createNativeStackNavigator } from "@react-navigation/native-stack"


const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false, }} >
      <Screen 
        name="home"
        component={Home}
      />
      <Screen 
        name="statics"
        component={Statics}
      />
    </Navigator>
  )
}