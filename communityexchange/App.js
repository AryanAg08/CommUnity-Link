import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from "./App/Pages/SearchBar";

export default function App() {
  return (
    <View style={styles.container}>
    {/* //   <Text>Open up App.js to start working on your app!</Text>
    //   <Text>Hii this is working!!</Text>
    //   <StatusBar style="auto" /> */}
    <SearchBar/ >
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
