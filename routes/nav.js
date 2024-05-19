import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../src/Screens/Splash';
import Home from '../src/Screens/Home';
import ScreenNames from './screenNames';
import HorseNormalization from '../src/Screens/HorseNormalization';
import CoachProfile from '../src/Screens/CoachProfile';

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ScreenNames.splash} component={Splash} />
        <Stack.Screen name={ScreenNames.home} component={Home} options={{headerStyle:{backgroundColor:'#fffdde'}}}/>
        <Stack.Screen name={ScreenNames.HorseNormalization} component={HorseNormalization} options={{headerStyle:{backgroundColor:'#fffdde'}}}/>
        <Stack.Screen name={ScreenNames.CoachProfile} component={CoachProfile} options={{headerStyle:{backgroundColor:'#fffdde'}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;