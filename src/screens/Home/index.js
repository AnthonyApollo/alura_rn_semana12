import React from 'react';
import Header from '../../components/Header';
import TaskList from './components/TaskList';

export default function Home() {
    return <TaskList header={Header} />
}
