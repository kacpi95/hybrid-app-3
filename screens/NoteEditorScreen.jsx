import { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export default function NoteEditorScreen() {
  const [note, setNote] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Write...'
        multiline={true}
        textAlignVertical='top'
        value={note}
        onChangeText={setNote}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
  },
});
