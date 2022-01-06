import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';
const Tab = createMaterialBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;
            switch (route.name) {
              case 'Screen_A':
                iconName = 'affiliatetheme';
                break;
              case 'Screen_B':
                iconName = 'amazon-pay';
                break;
              default:
                break;
            }
            // if (route.name === 'Screen_A') {
            //   iconName = 'airbnb';
            // }
            // if (route.name === 'Screen_B') {
            //   iconName = 'btc';
            // }
            return (
              <FontAwesome5
                name={iconName}
                size={focused ? 22 : 20}
                color={focused ? 'yellow' : 'pink'}
              />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: 20,
          },
          tabBarShowLabel: false,
        })}>
        <Tab.Screen
          name="Screen_A"
          component={ScreenA}
          options={{tabBarBadge: 3}}
        />
        <Tab.Screen name="Screen_B" component={ScreenB} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
