import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import SearchBar from "./App/Pages/SearchBar";
import Profile from './App/Pages/profilePage/profile';
import Card from './App/Pages/cards';
import LatestEventsScreen from './App/Pages/homePage/latestEvents';
import ExchangeActivityScreen from './App/Pages/homePage/search_bar';
export default function App() {
  const latestEvents = [
    {
      id: 1,
      title: 'Community Meetup',
      location: 'Central Park',
      date: '2024-04-25',
      time: '10:00 AM',
      description: 'A gathering of community members to discuss various topics.',
    },
    {
      id: 2,
      title: 'Workshop on React Native',
      location: 'Community Center',
      date: '2024-04-28',
      time: '2:00 PM',
      description: 'Learn React Native from scratch with hands-on exercises.',
    }]
  return (
    <View style={styles.container}>
    {/* //   <Text>Open up App.js to start working on your app!</Text>
    //   <Text>Hii this is working!!</Text>
    //   <StatusBar style="auto" /> */}
   
    <ExchangeActivityScreen></ExchangeActivityScreen>
    <LatestEventsScreen events={latestEvents} />
    {/* <Card></Card> */}
    {/* <SafeAreaView style={styles.container}>
      <ExchangeActivityScreen></ExchangeActivityScreen>
    <LatestEventsScreen events={latestEvents} />
  </SafeAreaView> */}
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
