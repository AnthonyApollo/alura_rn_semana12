import React from "react";
import { FlatList, StyleSheet } from "react-native";

import useHabits from "../hooks/useHabits";
import Habit from "./Habit";
import HabitsListHeader from "./HabitsListHeader";

export default function HabitsList({ header: Header}) {
    const [title, image, list] = useHabits()

    const renderItem = ({ item }) => {
        return <Habit {...item} />
    }

    const header = () => {
        return (
            <>
                <Header />
                <HabitsListHeader
                    title={title}
                    image={image}
                />
            </>
        )
    }

    return <>
        <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={({ habit }) => habit}
            ListHeaderComponent={header}
            style={styles.list}
        />
    </>
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#EBFFEE'
    }
})
