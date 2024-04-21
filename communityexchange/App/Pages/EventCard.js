import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventCard = ({ event }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsLabel}>Location:</Text>
        <Text style={styles.details}>{event.location}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsLabel}>Date:</Text>
        <Text style={styles.details}>{event.date}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsLabel}>Time:</Text>
        <Text style={styles.details}>{event.time}</Text>
      </View>
      <Text style={styles.description}>{event.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6e6fa',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3, // For Android shadow
    shadowColor: '#000000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 }, // For iOS shadow
    shadowOpacity: 0.2, // For iOS shadow
    shadowRadius: 2, // For iOS shadow
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  detailsContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
  },
  detailsLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
    color: '#555555',
  },
  details: {
    fontSize: 16,
    color: '#555555',
  },
  description: {
    fontSize: 16,
    color: '#777777',
  },
});

export default EventCard;
