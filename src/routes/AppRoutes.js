import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home"
import Habits from "../screens/Habits";

export default function AppRoutes() {
    const Tab = createBottomTabNavigator();

    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Habits" component={Habits} />
        </Tab.Navigator>
    </NavigationContainer>
}