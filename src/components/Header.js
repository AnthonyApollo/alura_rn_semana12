import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native'

import checkmark from '../assets/checkmark.png'

export default function Header() {
    return <View style={styles.content}>
        <View style={styles.row}>
            <Image source={checkmark} style={styles.icon} />
            <Text style={styles.title}>Native Tracker</Text>
        </View>
        <Text style={styles.subtitle}>Organize suas tarefas e visualize seus hábitos</Text>
    </View>
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#EBF8FF',
        padding: 16
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 32,
        height: 32
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 14
    },
    subtitle: {
        marginTop: 22
    }
})
