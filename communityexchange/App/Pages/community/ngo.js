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
        The NGO Exchange Network is a dynamic global platform that serves as a rallying point for non-governmental organizations 
        (NGOs) from across the globe. It provides a vibrant space for these organizations to come together,
         share resources, and collaborate on initiatives aimed at creating positive change in communities around the world.
        </Text>
        <Text style={styles.description}>
        Join the NGO Exchange Network, where NGOs from around the world converge to create waves of positive change! 
        Our vibrant platform is the epicenter of collaboration, where NGOs unite, innovate, and amplify their impact on society. 
        Together, we're not just organizations—we're a force for good, shaping the future of communities worldwide!
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