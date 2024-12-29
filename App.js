/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="left"
        drawerType="front"
        edgeWidth={100}
        hideStatusBar={false}
        overlayColor="rgba(0,0,0,0.7)"
          drawerStyle={{
          backgroundColor: '#c6cbef',
          width: 240,
        }}
        screenOptions={{
          headerShown: true,
          swipeEnabled: true,
          gestureEnabled: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#c6cbef',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
          },
        }}
        >
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Home',
            }}
          />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;