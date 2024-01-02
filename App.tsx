import { StatusBar } from 'react-native';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { ThemeProvider } from 'styled-components'

import theme from '@theme/index';

import { Groups } from '@screens/Groups';
import { Loading } from '@components/Loading';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold})

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
