import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Menu component to navigate between pages
const Menu = () => {
  // Initialize useNavigation hook.
  // This is workaround for not receiving the navigation prop
  // (b/c Menu is not in the Stack.Navigator -
  // all component in Stack.Navigatior gets a navigation prop
  // which provides methods to move between screens)
  // Menu will not have a screen in the Stack.Navigator
  // b/c we don't need to navigate to it.
  // By adding useNavigation hook, Menu can use the navigation prop
  // of the screen that contains the Menu.
  const navigation = useNavigation();

  // React Native has a Button component, but it's not very customizable.
  // 'Touchable' or 'Pressable' components are better choice and behave consistently
  // across android/ios

  return (
    <View style={styles.menu}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Tickets')}
        style={styles.button}>
        <Text style={styles.buttontext}>Events</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
  },
  button: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginRight: 5,
    marginLeft: 5,
  },
  buttontext: {
    fontFamily: 'Ubuntu-Regular',
  },
});

export default Menu;
