import { StyleSheet, View, Text, Linking } from 'react-native';

export default function AboutScreen() {
  const email = 'kacper2@gmail.com';

  const sendEmail = () => {
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Kacper Grzywacz</Text>
      <Text style={styles.phoneNumber}>738291938</Text>
      <Text style={styles.email} onPress={sendEmail}>
        {email}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  phoneNumber: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 15,
  },
  email: {
    fontSize: 18,
    color: '#ffffff',
    backgroundColor: '#228aeb',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontWeight: '700',
    overflow: 'hidden',
    textAlign: 'center',
  },
});
