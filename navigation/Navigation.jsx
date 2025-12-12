import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from '../screens/FirstScreen';
import NoteEditorScreen from '../screens/NoteEditorScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={AboutScreen} />
        <Stack.Screen name='EditNote' component={NoteEditorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
