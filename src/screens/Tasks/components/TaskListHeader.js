import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function TaskListHeader({title, imageURL, doneTasksCount = 0, allTasksCount = 0}) {

    return <View style={styles.content}>
        <View style={styles.staticInfo}>
            <Image source={imageURL}/>
            <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.counter}>{doneTasksCount} / {allTasksCount}</Text>
    </View>
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 16
    },
    staticInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        marginLeft: 16,
        fontWeight: 'bold'
    },
    counter: {
        backgroundColor: '#BDBCFF',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        overflow: 'hidden'
    }
})
