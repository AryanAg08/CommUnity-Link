import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CommunityEventCard = ({ event }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.details}>Location: {event.location}</Text>
      <Text style={styles.details}>Date: {event.date}</Text>
      <Text style={styles.details}>Time: {event.time}</Text>
      <Text style={styles.details}>Description: {event.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 }, // For iOS shadow
    shadowOpacity: 0.2, // For iOS shadow
    shadowRadius: 2, // For iOS shadow
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default CommunityEventCard;
