import React from 'react';
import { View, FlatList } from 'react-native';
import CommunityEventCard from './homepage';

const LatestEventsScreen = ({ events }) => {
  return (
    <View>
      <FlatList
        data={events}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <CommunityEventCard event={item} />}
      />
    </View>
  );
};

export default LatestEventsScreen;
