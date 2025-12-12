import { Text, View, StyleSheet } from 'react-native';

export default function TipOfTheDay() {
  const myDate = new Date();
  const tips = [
    'Always wash your hands after eating',
    'Be nice to other people',
    'Eat vegetables and fruits',
  ];

  const day = myDate.getDate();
  const month = myDate.getMonth() + 1;
  const year = myDate.getFullYear();

  let selected = Math.floor(Math.random() * tips.length);
  const today = `${day}.${month}.${year}`;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Today is {today}</Text>
      <Text style={styles.text}>Tip of the day: {tips[selected]}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  text: {
    color: '#ffffffff',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 4,
  },
});
