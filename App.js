import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

//import das screens
import HomeScreen  from './src/screens/Perfil';
import ListaScreen from './src/screens/Lista';
import LoginScreen from './src/screens/Login';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={ 
         ({ route }) => ({ 
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } 
            else if (route.name === 'Lista') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#8C6A56',
          inactiveTintColor: '#BFB3A8',
          activeBackgroundColor:'#BFB3A8',
          inactiveBackgroundColor: '#8C6A56'
        }} >


        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:({color}) => (
          <Icon name="happy" color={color} size={26} />
        )}} />
        <Tab.Screen name="Lista" component={ListaScreen} options={{tabBarColor: '#000', tabBarIcon:({color}) => (
          <Icon name="list" color={color} size={26} />
        )}} />
        <Tab.Screen options={{ title: 'Login' }} name="Login" component={LoginScreen} options={{tabBarIcon:({color}) => (
          <Icon name="log-in" color={color} size={26} />
        )}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}