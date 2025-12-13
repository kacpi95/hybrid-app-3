import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import TipOfTheDay from '../TipOfTheDay';

const { width, height } = Dimensions.get('window');

export default function FirstScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/img-1.jpg')}
        style={styles.image}
        resizeMode='cover'
      />
      <View style={styles.overlay}>
        <TipOfTheDay />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.buttonText}>Go to About</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Note')}
        >
          <Text style={styles.buttonText}>Go to Note</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: height,
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 100,
    width: '100%',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: 'rgba(167, 167, 167, 0.7)',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
