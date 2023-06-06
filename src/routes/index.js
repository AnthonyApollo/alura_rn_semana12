import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { tabs } from "./tabs";

export default function AppRoutes() {
    const Tab = createBottomTabNavigator();

    return <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => {
                // let Icon = ListIcon

                // if (route.name === 'Habits') {
                //     Icon = HeartLine
                // }

                let Icon = Object.entries(tabs).find(element => element[0] === route.name)[1].icon
                return <Icon color={color} />
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: '#A7A7A7',
        })}>
            {Object.entries(tabs).map(([name, { component }]) => (
                <Tab.Screen
                    key={name}
                    name={name}
                    component={component}
                />
            ))}
        </Tab.Navigator>
    </NavigationContainer>
}
