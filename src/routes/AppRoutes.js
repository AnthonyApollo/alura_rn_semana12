import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Habits from "../screens/Habits";

import ListIcon from "./assets/list.svg";
import HeatLine from "./assets/heartline.svg"

export default function AppRoutes() {
    const Tab = createBottomTabNavigator();

    return <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => {
                let Icon = ListIcon

                if (route.name === 'Habits') {
                    Icon = HeatLine
                }

                return <Icon color={color} />
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: '#A7A7A7',
        })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Habits" component={Habits} />
        </Tab.Navigator>
    </NavigationContainer>
}
