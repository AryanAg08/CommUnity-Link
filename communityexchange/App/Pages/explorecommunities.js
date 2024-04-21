import React, { useState, useEffect } from 'react';
import { ScrollView,View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

const CommunityCards = ({ communities }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Communities</Text>
      <ScrollView>
       <View style={styles.cardContainer}>
        {communities.map((community, index) => (
          <View key={index} style={[styles.cta, styles.cardShadow]}>
            <View style={styles.textColumn}>
              <Text style={styles.heading}>{community.name}</Text>
              <Text style={styles.description}>{community.description}</Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonWithBorder]}
                onPress={() => console.log(Button +`${index + 1}` +pressed)}
              >
                <Text style={[styles.buttonText, styles.buttonTextCenter]}>Learn More...</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
      </ScrollView>
    </View>
  );
};

const CommunityScreen = () => {
  const [communities, setCommunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/all-communities');
        const data = await response.json();
        console.log(data);
        setCommunities(data.communities);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <CommunityCards communities={communities} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'left',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Center cards vertically

  },
  cta: {
    flexDirection: 'row',
    backgroundColor: '#f0ffff',
    maxWidth: 400,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 2,
    marginRight: 13,
    borderColor: '#000000',
    marginBottom: 20,
  },
  textColumn: {
    flex: 1,
    padding: 20,
    
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#F5E8DD',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  buttonWithBorder: {
    borderWidth: 0.7,
    borderColor: '#000000', // Set border color to match button text color
  },
  buttonTextCenter: {
    textAlign: 'center', // Align text to center
  },
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 5,
  },
});

export default CommunityScreen;