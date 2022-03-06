
import { SafeAreaView } from 'react-native';
import Home from './src/Screens/Home';
import { globalStyles } from './src/styles/GlobalStyles';

export default function App() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Home />
    </SafeAreaView>
  )
}

