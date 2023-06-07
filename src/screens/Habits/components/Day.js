import React, { useState, memo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Day({ letter, isDone, updateCounter }) {
    const [isSelected, setIsSelected] = useState(isDone)

    const handlePress = () => {
        updateCounter(!isSelected)
        setIsSelected(!isSelected)
    }

    return <TouchableOpacity 
        style={[styles.content, isSelected ? styles.done : styles.undone]}
        onPress={handlePress}
    >
        <Text>
            {letter}
        </Text>
    </TouchableOpacity>
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
