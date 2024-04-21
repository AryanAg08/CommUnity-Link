import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CommunityDetailsScreena = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Artisan Exchange Collective!</Text>
      <View style={styles.box}>
        <Image
          source={require('../assets/art.png')}
          style={styles.logo}
        />
        <Text style={styles.heading}>Artisan Exchange Collective</Text>
        <Text style={styles.description}>
        The Artisan Exchange Collective is a community that celebrates craftsmanship and creativity. 
        It provides a platform for artisans from various backgrounds to come together, share their skills, and collaborate on projects. 
        Whether you're a traditional artisan working with ceramics, textiles, or wood, or a modern artist exploring digital media, 
        the Artisan Exchange Collective welcomes individuals with a passion for creating.
        Members of this community embrace the art of exchange, where ideas flow freely, and inspiration is found in the diversity of perspectives. 
        </Text>
        <Text style={styles.description}>
        The Artisan Exchange Collective is not just a place to showcase talent; it's a supportive environment where artists can grow, learn, and thrive. 
        It fosters a sense of belonging and camaraderie among members, encouraging collaboration and innovation in the pursuit of artistic excellence.
        Join our vibrant community, where creativity knows no bounds and every creation tells a story!!!
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