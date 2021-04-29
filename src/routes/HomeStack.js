import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import DietDetail from '../screens/DietDetail';
import Header from '../components/Header';
import DrawerHeader from '../components/DrawerHeader';
import ThemeContext from '../context/themeContext';

const Stack = createStackNavigator();

const HomeStack = () => {
  const {mode, changeMode} = useContext(ThemeContext);
  let headerStyle = {};
  let headerTintColor;
  if (mode === 'pink') {
    headerStyle = {
      backgroundColor: '#F8687F',
    };
    headerTintColor = '#ffff';
  } else {
    headerStyle = {
      backgroundColor: '#ffff',
    };
    headerTintColor = '#000';
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerTitle: () => null}}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => <DrawerHeader />,
            // headerStyle: {
            //   backgroundColor: '#F8687F',
            // },
            // headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Diet Detail"
          component={DietDetail}
          options={{
            headerTitle: () => <Header mode={mode} changeMode={changeMode} />,
            headerStyle: {...headerStyle},
            headerTintColor: headerTintColor,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
