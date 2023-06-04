import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Day({letter, isDone}) {
    return <Text style={[styles.content, isDone ? styles.done : styles.undone]}>
        {letter}
    </Text>
}

const styles = StyleSheet.create({
    content: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 16,
        overflow: 'hidden'
    },
    done: {
        backgroundColor: '#00EA17',
    },
    undone: {
        borderColor: '#00EA17',
        borderWidth: 1
    }
})
