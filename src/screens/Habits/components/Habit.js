import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Day from "./Day";

export default function Habit({ habit, icon, doneDays }) {
    const count = useMemo(
        () => percentageOfDays(doneDays.length),
        [doneDays]
    )

    return <View style={styles.content}>
        <View style={styles.info}>
            <View style={styles.identification}>
                <Image source={icon} />
                <Text style={styles.title}>{habit}</Text>
            </View>
            <Text style={styles.counter}>{`${count}%`}</Text>
        </View>
        <View style={styles.row}>
            {weekDays.map((day) => {
                return <Day
                    letter={day.charAt(0)}
                    isDone={doneDays.includes(day)}
                />
            })}
        </View>
    </View>
}

const percentageOfDays = (days) => {
    return Math.floor((days / weekDays.length) * 100);
}

const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
]

const styles = StyleSheet.create({
    content: {
        padding: 15,
        backgroundColor: '#E1EFF2',
        marginHorizontal: 20,
        marginBottom: 20,
        borderRadius: 16
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    identification: {
        flexDirection: 'row'
    },
    counter: {
        backgroundColor: '#F582F8',
        paddingHorizontal: 11,
        paddingVertical: 3,
        borderRadius: 8,
        overflow: 'hidden'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        marginLeft: 8,
        fontWeight: 'bold',
        fontSize: 16
    }
})
