import { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NoteEditorScreen() {
  const [note, setNote] = useState('');

  const STORAGE_KEY = `@user_note`;

  useEffect(() => {
    const loadNote = async () => {
      try {
        const savedNote = await AsyncStorage.getItem(STORAGE_KEY);
        if (savedNote !== null) {
          setNote(savedNote);
        }
      } catch (err) {
        Alert.alert('Failed to load the note');
      }
    };
    loadNote();
  }, []);

  const saveNote = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, note);
      Alert.alert('Note save');
    } catch (err) {
      Alert.alert('Failed to save note');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Write...'
        multiline={true}
        textAlignVertical='top'
        value={note}
        onChangeText={setNote}
      />
      <TouchableOpacity style={styles.button} onPress={saveNote}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
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
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'rgba(167, 167, 167, 0.86)',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
