import React from 'react';
import { ScrollView,View, FlatList, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import ExchangeActivityScreen from './search_bar'; // Import your ExchangeActivityScreen component
import EventPage from "./EventPage";
import MainChat from './MainChat';
import CommunityScreen from './explorecommunities';
// import { ScrollView } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close Drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
};

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.homepage}>
       <ScrollView>
       <TouchableOpacity onPress={() => navigation.navigate('Events')}>
        <Text style={styles.content}>Events</Text>
        
      </TouchableOpacity>
     
      <Text>{'\n'}{'\n'}About CommUnity-Link
Welcome to CommUnity-Link ! We are excited to have you here.
{'\n'}
{'\n'}
<Text style={styles.content}>Our Mission</Text>
{'\n'}CommUnity-Link aims to foster connections and collaboration within the community by providing a platform for participants to discover and join exchange activities, workshops, events, and cultural experiences organized by the community.
{'\n'}
{'\n'}
<Text style={styles.content}>Our Goals</Text>
{'\n'}To promote knowledge sharing and skill development among community members.
To facilitate meaningful interactions and networking opportunities.
To celebrate diversity and promote cultural exchange.
{'\n'}{'\n'}
<Text style={styles.content}>How It Works</Text>
{'\n'}Discover Activities: Browse through a variety of exchange activities, workshops, events, and cultural experiences organized by the community.
Join Activities: Participate in activities that interest you by signing up and engaging with fellow community members.
Organize Activities: If you have an idea for an activity or event, you can also organize and host it within the community.
{'\n'}{'\n'}
<Text style={styles.content}>Our Values</Text>
{'\n'}{'\n'}Inclusivity: We welcome participants from all backgrounds and skill levels.
{'\n'}{'\n'}
Community-driven: Our platform is built by the community, for the community.
{'\n'}{'\n'}
Respect: We foster an environment of mutual respect and collaboration.
{'\n'}{'\n'}
Continuous Learning: We encourage continuous learning and personal growth.
{'\n'}{'\n'}
Get Involved
Join CommUnity-Link today and start exploring, learning, and connecting with others in the community!

Sign Up Now | Learn More

Contact Us
Have questions or feedback? We'd love to hear from you! Reach out to us at contact@example.com.
</Text>
</ScrollView>

      
    </View>
  );
};

const HomePage = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Menu" component={MenuScreen} />
       <Drawer.Screen name="Events" component={EventPage} />
      <Drawer.Screen name="Chats" component={MainChat} />
      <Drawer.Screen name="Explore Communities" component={CommunityScreen} />
    </Drawer.Navigator>
  );
};

export default HomePage;

const styles={
  homepage:{
    padding:'1rem',
    flex:1,
    backgroundColor:'#EED3D9',
    fontSize: 34,
    fontWeight: 'bold',
    color: 'blue',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  content:{
    fontWeight:'bold',
    
    fontSize:'1rem',
  }
}