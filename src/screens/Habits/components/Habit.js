import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Day from "./Day";

export default function Habit({ habit, icon, doneDays }) {
    const [percentage, setPercentage] = useState(0)
    const [selectedDays, setSelectedDays] = useState(doneDays.length)

    const handleSelection = (selected) => {
        const selectedCount = selected ? selectedDays + 1 : selectedDays - 1
        setSelectedDays(selectedCount)
    }

    useEffect(() => {
        setPercentage(percentageOfDays(selectedDays))
    }, [selectedDays])

    return <View style={styles.content}>
        <View style={styles.info}>
            <View style={styles.identification}>
                <Image source={icon} />
                <Text style={styles.title}>{habit}</Text>
            </View>
            <Text style={styles.counter}>{`${percentage}%`}</Text>
        </View>
        <View style={styles.row}>
            {weekDays.map((day, index) => {
                return <Day
                    key={index}
                    letter={day.charAt(0)}
                    isDone={doneDays.includes(day)}
                    updateCounter={handleSelection}
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
