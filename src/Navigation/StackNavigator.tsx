import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Screens';

export type HomeStackParamList = {
    Home: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

export default () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}
