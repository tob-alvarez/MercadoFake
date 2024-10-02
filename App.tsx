import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Actividad from './screens/Actividad';
import Beneficios from './screens/Beneficios';
import Mas from './screens/Mas';

export type StackScreens = {
  Home: undefined;
  Actividad: undefined;
  Beneficios: undefined;
  Mas: undefined;
};

const Tab = createBottomTabNavigator<StackScreens>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName: string = '';
            switch (route.name) {
              case 'Home':
                iconName = 'home-outline';
                break;
              case 'Actividad':
                iconName = 'card-outline';
                break;
              case 'Beneficios':
                iconName = 'ticket-outline';
                break;
              case 'Mas':
                iconName = 'menu-outline';
                break;
              default:
                iconName = 'ellipse-outline';
            }

            return <Icon name={iconName} size={24} color={color} />;
          },
          tabBarActiveTintColor: '#048ec6',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            height: 60,
            paddingBottom: 5,
          }
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{ title: 'Inicio', headerShown: false }} />
        <Tab.Screen name="Actividad" component={Actividad} options={{
          title: 'Actividad', headerStyle: {
            backgroundColor: '#00aaff', 
          },
          headerTintColor: '#fff'
        }} />
        <Tab.Screen name="Beneficios" component={Beneficios} options={{
          title: 'Beneficios', headerStyle: {
            backgroundColor: '#00aaff',
          },
          headerTintColor: '#fff'
        }} />
        <Tab.Screen name="Mas" component={Mas} options={{ title: 'Mas', headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
