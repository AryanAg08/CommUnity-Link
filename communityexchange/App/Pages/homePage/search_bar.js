import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

const ExchangeActivityScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [activities, setActivities] = useState([]);

  const fetchActivities = async () => {
    // You would typically make an API call here to fetch activities based on search criteria
    // For demonstration purposes, I'll just filter some mock activities based on search text
    const filteredActivities = mockActivities.filter(activity =>
      activity.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setActivities(filteredActivities);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Search activities..."
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />
      <Button title="Search" onPress={fetchActivities} />
      <FlatList
        data={activities}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>Title: {item.title}</Text>
            <Text>Location: {item.location}</Text>
            <Text>Date: {item.date}</Text>
            <Text>Topic: {item.topic}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ExchangeActivityScreen;

// Mock activity data (replace this with actual API calls)
const mockActivities = [
  { id: 1, title: 'Language Exchange', location: 'City A', date: '2024-04-25', topic: 'Language Learning' },
  { id: 2, title: 'Cultural Workshop', location: 'City B', date: '2024-04-27', topic: 'Cultural Experience' },
  // More mock activity objects...
];
