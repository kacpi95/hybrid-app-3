import { Text, View, StyleSheet } from 'react-native';
import TipOfTheDay from './TipOfTheDay';


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash screen for the application</Text>
      <TipOfTheDay />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
