import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import logo from './assets/logo_appsf.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
      <Image source={logo} style={styles.logoStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDB81C',
    alignItems: 'center',
    justifyContent: 'center',
  },
logoStyle: {
  flex: 1,
   width: 230,
   height: 230,
   resizeMode: 'contain',
  },
});


