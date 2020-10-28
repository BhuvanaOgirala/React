import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import ListItem from './Component/ListItem';

export default function App() {
  const [OutputText,setText] = useState("Test Button on Native")
  return (
    <View style={styles.container}>
      <Text>My Native App!</Text>
      
      <Text>{OutputText}</Text>
      <Button title="clickMe" onPress={() => setText('Text Changed')}/>
      <Button title="clickBack" onPress={() => setText('Test Button on Native')}/>
      <ListItem/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
