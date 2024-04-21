import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CommunityDetailsScreena = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to NGO Exchange Network!</Text>
      <View style={styles.box}>
        <Image
          source={require('../assets/ngo.png')}
          style={styles.logo}
        />
        <Text style={styles.heading}>NGO Exchange Network</Text>
        <Text style={styles.description}>
          The NGO Exchange Network is a global platform dedicated to fostering collaboration and partnership among non-governmental organizations (NGOs) worldwide. Our mission is to drive impactful community change by facilitating cooperation, sharing best practices, and amplifying our collective impact on society. By joining our network, NGOs gain access to a diverse community of like-minded organizations, resources, and opportunities for collaboration. Together, we work towards common goals, share expertise, and address pressing social issues to create positive change in communities around the world.
        </Text>
        <Text style={styles.description}>

Our platform provides NGOs with a range of tools and resources to support their work, including networking opportunities, knowledge sharing, capacity building workshops, and funding opportunities. Whether you're a grassroots organization or a large-scale NGO, the NGO Exchange Network offers a space for collaboration, innovation, and collective action.

Join us in our mission to build a better world, one community at a time. Together, we can make a difference and create lasting change for future generations.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff', // Background color for the entire screen
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#4b0082', // Text color
  },
  box: {
    backgroundColor: '#e6e6fa', // Background color for the box
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4b0082', // Border color
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    width: '80%', // Adjusted width
    height: 500, // Adjusted height
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    alignSelf: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333', // Text color
  },
  description: {
    fontSize: 16,
    textAlign: 'justify', // Justify text alignment
    color: '#483d8b', // Text color
    lineHeight: 24, // Increased line height for better readability
  },
});

export default CommunityDetailsScreena;