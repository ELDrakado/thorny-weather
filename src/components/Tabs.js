import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'paleturquoise',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: '#060a24'
        },
        headerStyle: { backgroundColor: '#060a24' },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'paleturquoise'
        }
      }}
    >
      <Tab.Screen
        name='Current'
        component={CurrentWeather}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name='droplet'
                size={25}
                color={focused ? 'paleturquoise' : 'grey'}
              />
            );
          }
        }}
      ></Tab.Screen>
      <Tab.Screen
        name='Upcoming'
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name='clock'
                size={25}
                color={focused ? 'paleturquoise' : 'grey'}
              />
            );
          }
        }}
      ></Tab.Screen>
      <Tab.Screen
        name='City'
        component={City}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name='home'
                size={25}
                color={focused ? 'paleturquoise' : 'grey'}
              />
            );
          }
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
