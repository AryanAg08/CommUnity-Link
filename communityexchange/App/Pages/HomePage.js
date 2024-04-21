import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import ExchangeActivityScreen from './search_bar'; // Import your ExchangeActivityScreen component
import EventPage from "./EventPage";
import MainChat from './MainChat';
import CommunityScreen from './explorecommunities';

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
    <View style={{ flex: 1 }}>
      <Text>Welcome User!! </Text>
       <TouchableOpacity onPress={() => navigation.navigate('Events')}>
        <Text>Events</Text>
      </TouchableOpacity>
      
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
