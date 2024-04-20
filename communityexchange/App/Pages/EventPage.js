import React from 'react';
import { View, FlatList } from 'react-native';
import EventCard from './EventCard';
import ExchangeActivityScreen from './search_bar';

const events = [
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

const EventPage = () => {
  return (
    <View>
        <ExchangeActivityScreen/>
      <FlatList
        data={events}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <EventCard event={item} />}
      />
    </View>
  );
};

export default EventPage;