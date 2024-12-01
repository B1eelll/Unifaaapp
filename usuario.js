import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

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
});