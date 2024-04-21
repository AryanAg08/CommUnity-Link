import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CommunityDetailsScreena = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to NGO Exchange Network!</Text>
      <View style={styles.box}>
        <Image
          source={require('../assets/red.png')}
          style={styles.logo}
        />
        <Text style={styles.heading}>Red dot</Text>
        <Text style={styles.description}>
        The red dot isn't just a mark; it's a call to action. Like the red light at intersections, 
        it signals danger and prompts us to stop and take notice.
         With urgency in our symbol, we emphasize the importance of addressing road safety head-on.
        </Text>
        <Text style={styles.description}>
Activities:
From workshops to audits, we're hands-on in our approach. We educate in schools, assess hazardous conditions, and work closely with authorities to implement life-saving measures like signage and crossings. Policy changes and stricter enforcement? We're all for it.
Impact:
Our efforts aren't just talk; they're tangible results. Thanks to our initiatives, accidents and fatalities are on the decline. We're making streets safer, one step at a time.
Expansion:
What started in Pune is now a movement across India. Our grassroots approach has sparked similar initiatives nationwide, amplifying our influence and reshaping the road safety landscape.
Join Us:
At Red Dot, we're not just advocates; we're changemakers. Together, let's pave the way to safer streets and brighter futures. Join us in making a difference.
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