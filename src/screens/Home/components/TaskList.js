import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Task from './Task';
import useTasks from '../hooks/useTasks';
import TaskListHeader from './TaskListHeader';

export default function TaskList({ header: Header }) {
    const [title, image, list] = useTasks()
    const [doneTasksCount, setDoneTasksCount] = useState(0)

    const updateCounter = (isDone) => {
        isDone ? setDoneTasksCount(doneTasksCount + 1) : setDoneTasksCount(doneTasksCount - 1)
    }

    useEffect(() => {
        const count = list.reduce((acc, cur) => cur.isDone ? ++acc : acc, 0)
        setDoneTasksCount(count)
    }, [list])

    const renderItem = ({ item }) => {
        return <Task {...item} updateCounter={updateCounter} />;
    };

    const header = () => {
        return (
            <>
                <Header />
                <TaskListHeader
                    title={title}
                    imageURL={image}
                    allTasksCount={list.length}
                    doneTasksCount={doneTasksCount}
                />
            </>
        )
    }

    return <>
        <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={({ task }) => task}
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
