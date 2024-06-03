
import { Routes } from '@/routes';
import { themeDefault } from '@/themes';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

export default function App() {

  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
   <ThemeProvider theme={themeDefault}>
    <StatusBar 
      animated
      style='dark' 
      translucent 
    />
    { fontsLoaded ? <Routes /> : '' }
   </ThemeProvider>
  );
}
