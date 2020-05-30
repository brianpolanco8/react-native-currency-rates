import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Landing, Rates } from '../screens'
import DrawerNavigator from './DrawerNavigator'

const Stack = createStackNavigator();

const shouldHeaderBeShow = (route, navigation) => {
    const routeName = route.state ? route.state.routes[route.state.index].name : 'Landing';

    console.log(routeName)
}

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Landing" component={DrawerNavigator} />
            <Stack.Screen name="Rates" component={Rates} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default StackNavigator;