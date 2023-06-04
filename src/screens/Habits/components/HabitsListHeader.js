import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function HabitsListHeader({title, image}) {
    return <View style={styles.content}>
        <Image source={image}/>
        <Text style={styles.title}>{title}</Text>
    </View>
}

const styles = StyleSheet.create ({
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20
    },
    title: {
        marginHorizontal: 16,
        fontWeight: 'bold',
        fontSize: 16
    }
})
