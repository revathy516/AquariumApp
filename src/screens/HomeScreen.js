import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons';
import mapImage from '../assets/map.png';
import inhabitants from '../assets/inhabitants.png';
import shows from '../assets/shows.png';
import shopping from '../assets/shopping.png';
import dine from '../assets/dine.png';
import meet from '../assets/meet&greet.png';

const { width: screenWidth } = Dimensions.get('window'); // Get screen width for carousel

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  const data = [
    { id: '1', name: 'Dive Feeding', time: '2:30 PM', image: require('../assets/img_1.jpg') },
    { id: '2', name: 'Shark Talk', time: '2:40 PM', image: require('../assets/img_2.jpg') },
  ];

  // Images for the carousel
  const carouselImages = [
    require('../assets/img_1.jpg'),
    require('../assets/img_2.jpg'),
    require('../assets/img_3.jpg'),
  ];

  const images = {
    map: mapImage,
    Inhabitants: inhabitants,
    Shows: shows,
    Shopping: shopping,
    Dine:dine,
  'Meet & greet': meet
  };
  
  const imageSource = images[item.toLowerCase()];

  return (
    <View style={styles.container}>
      {/* Horizontal Image Carousel */}
      <Carousel
        data={carouselImages}
        renderItem={({ item }) => (
          <Image source={item} style={styles.carouselImage} />
        )}
        sliderWidth={screenWidth} // Set slider width to the screen width
        itemWidth={screenWidth} // Each item should take up the full screen width
        loop={true} // Enable looping for the carousel
      />
      
      <View style={styles.navContainer}>
    <TouchableOpacity key={item} style={styles.navButton}>
      <Image source={imageSource}  
        style={styles.navIcon}
      />
      <Text style={styles.navText}>{item}</Text>
    </TouchableOpacity>
</View>

      <View style={styles.infoContainer}>
        <Text>My e-tickets: No tickets</Text>
        <Text>Park hours: 10 AM - 5 PM</Text>
      </View>

      <Text style={styles.sectionTitle}>Upcoming Shows</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.showCard}
            onPress={() => navigation.navigate('Detail', { data: item })}
          >
            <Image source={item.image} style={styles.showImage} />
            <Text style={styles.showTitle}>{item.name}</Text>
            <Text style={styles.showTime}>{item.time}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const WalletScreen = () => (
  <View style={styles.container}>
    <Text>Wallet Screen</Text>
  </View>
);

const MoreScreen = () => (
  <View style={styles.container}>
    <Text>More Screen</Text>
  </View>
);

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: true,
      tabBarStyle: { height: 60 },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        tabBarLabel: 'Home',
      }}
    />
    <Tab.Screen
      name="Wallet"
      component={WalletScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="wallet" size={size} color={color} />,
        tabBarLabel: 'Wallet',
      }}
    />
    <Tab.Screen
      name="More"
      component={MoreScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="ellipsis-horizontal" size={size} color={color} />,
        tabBarLabel: 'More',
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    carouselImage: {
      width: screenWidth,
      height: 200,
      resizeMode: 'cover',
    },
    navContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 10,
      justifyContent: 'space-around',
    },
    navButton: {
      width: 70,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
    },
    navText: {
      fontSize: 12,
      textAlign: 'center',
    },
    navIcon: {
      width: 40, // Set the size of the icons
      height: 40,
      marginBottom: 5, // Space between the icon and text
    },
    infoContainer: {
      padding: 10,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    showCard: {
      width: 150,
      margin: 10,
    },
    showImage: {
      width: '100%',
      height: 100,
    },
    showTitle: {
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    showTime: {
      textAlign: 'center',
      color: 'gray',
    },
  });
  
