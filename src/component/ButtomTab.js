import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Animated } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { PanGestureHandler } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');
const TAB_WIDTH = width / 4;

export default function BottomTab() {
  const [selected, setSelected] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const tabItems = [
    { name: 'Home', icon: require('../assets/Homeimage.png'), route: 'HomeScreen' },
    { name: 'Categories', icon: require('../assets/menu.png'), route: 'Categories' },
    { name: 'Cart', icon: require('../assets/cart.png'), route: 'CartScreen' },
    { name: 'Profile', icon: require('../assets/user.png'), route: 'Profile' },
  ];

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', (e) => {
      const routes = e.data.state.routes;
      const index = e.data.state.index;
      const currentRoute = routes[index].name;
      
      switch (currentRoute) {
        case 'Home':
          setSelected(0);
          break;
        case 'Categories':
          setSelected(1);
          break;
        case 'CartScreen':
          setSelected(2);
          break;
        case 'Profile':
          setSelected(3);
          break;
        default:
          setSelected(0);
      }
    });

    return unsubscribe;
  }, [navigation, isFocused]);

  useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: selected,
      useNativeDriver: true,
      friction: 5,
      tension: 30,
    }).start();
  }, [selected]);

  const handleTabPress = (index) => {
    const selectedTab = tabItems[index];
    setSelected(index);
    navigation.navigate(selectedTab.route);  // Ensure this matches your route names
  };

  return (
    <View style={styles.container}>
      <PanGestureHandler>
        <View style={styles.tabContainer}>
          {tabItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleTabPress(index)}
              style={styles.tab}
            >
              <View style={styles.iconContainer}>
                {selected === index && (
                  <Animated.View style={styles.selectedBackground} />
                )}
                <Image
                  source={item.icon}
                  style={[
                    styles.icon,
                    { tintColor: selected === index ? '#000' : '#8E8E8E' },
                  ]}
                />
              </View>
              <Text
                style={[
                  styles.tabText,
                  { color: selected === index ? '#000' : '#8E8E8E' },
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </PanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(255, 223, 74, 1)',
    borderRadius: 40,
    padding: 7,
    width: "100%",
    alignSelf: "center",
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tab: {
    alignItems: 'center',
    width: TAB_WIDTH,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  selectedBackground: {
    position: 'absolute',
    width: 40,
    height: 40,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
  },
});
