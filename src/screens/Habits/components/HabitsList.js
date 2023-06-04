import React from "react";
import { FlatList, StyleSheet } from "react-native";

import useHabits from "../hooks/useHabits";
import Habit from "./Habit";

export default function HabitsList() {
    const [title, image, list] = useHabits()

    const renderItem = ({ item }) => {
        return <Habit {...item} />
    };

    return <>
        <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={({ habit }) => habit}
            style={styles.list}
        />
    </>
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#EBFFEE'
    }
})
