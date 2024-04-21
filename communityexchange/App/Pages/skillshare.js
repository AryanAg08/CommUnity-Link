import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CommunityDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to SkillShare Community!</Text>
      <View style={styles.box}>
        <Image
          source={require('../assets/skill.png')}
          style={styles.logo}
        />
        <Text style={styles.heading}>SkillShare Community</Text>
        <Text style={styles.description}>
          The SkillShare Community is a vibrant hub for learning and skill development. Whether you're an expert in your field or just starting out,
          our community offers a wealth of opportunities to share knowledge, learn new skills, and connect with like-minded individuals.
          From workshops and seminars to online courses and peer-to-peer learning, SkillShare provides a supportive environment for personal and
          professional growth.
        </Text>
        <Text style={styles.description}>
          Whether you're eager to enhance your skills, connect with like-minded individuals, or collaborate on exciting projects,
          SkillShare offers a diverse range of workshops, courses, and resources tailored to your needs. Step into a supportive environment
          where creativity flourishes, knowledge is shared, and personal growth knows no bounds. Elevate your journey and embark on a
          transformative learning experience with SkillShare today!
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

export default CommunityDetailsScreen;