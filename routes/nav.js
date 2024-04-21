import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../src/Screens/Splash';
import Home from '../src/Screens/Home';
import ScreenNames from './screenNames';
import HorseNormalization from '../src/Screens/HorseNormalization';
import Jehad from '../src/Screens/Jehad';

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ScreenNames.splash} component={Splash} />
        <Stack.Screen name={ScreenNames.home} component={Home} options={{headerStyle:{backgroundColor:'#fffdde'}}}/>
        <Stack.Screen name={ScreenNames.HorseNormalization} component={HorseNormalization} options={{headerStyle:{backgroundColor:'#fffdde'}}}/>
        <Stack.Screen name={ScreenNames.jehad} component={Jehad} options={{headerStyle:{backgroundColor:'#fffdde'} , headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;