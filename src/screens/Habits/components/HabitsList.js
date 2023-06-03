import React from "react";
import { Text } from "react-native";

import useHabits from "../hooks/useHabits";

export default function HabitsList() {
    const [title, image, list] = useHabits()

    return <>
        <Text>{title}</Text>
    </>
}