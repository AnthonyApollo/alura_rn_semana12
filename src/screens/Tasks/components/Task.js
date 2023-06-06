import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Task({task, icon, isDone, updateCounter}) {
    const [isMarked, setIsMarked] = useState(isDone)

    const handlePress = () => {
        setIsMarked(!isMarked)
        updateCounter(!isMarked)
    };

    return <View style={[styles.content, isMarked ? styles.markedContent : styles.unmarkedContent]}>
        <View style={styles.info}>
            <Image source={icon} style={styles.icon} />
            <Text style={[styles.title, isMarked ? styles.markedTitle : null]}>{task}</Text>
        </View>
        <TouchableOpacity
            style={[styles.actionButton, isMarked ? styles.markedButton : styles.unmarkedButton]}
            onPress={handlePress}
        >
            <Text style={styles.buttonTitle}>{isMarked ? "Feito" : "Fazer"}</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        marginBottom: 14,
        borderRadius: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        maxHeight: 100,
        overflow: 'hidden',
        marginHorizontal: 16
    },
    icon: {
        width: 22,
        height: 22
    },
    info: {
        paddingLeft: 14,
        paddingVertical: 32,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        marginLeft: 14,
        fontWeight: 'bold'
    },
    actionButton: {
        height: '100%',
        justifyContent: 'center'
    },
    buttonTitle: {
        fontWeight: 'bold',
        marginHorizontal: 14
    },
    markedButton: {
        backgroundColor: '#00EA17'
    },
    unmarkedButton: {
        backgroundColor: '#FF5D5D'
    },
    markedTitle: {
        textDecorationLine: 'line-through'
    },
    markedContent: {
        backgroundColor: '#E1EFF2'
    },
    unmarkedContent: {
        backgroundColor: '#BDBCFF'
    }
})
