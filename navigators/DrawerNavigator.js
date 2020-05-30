import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Landing, Rates } from '../screens'

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Landing" component={Landing} />
            <Drawer.Screen name="Rates" component={Rates} />
        </Drawer.Navigator>
    );
}