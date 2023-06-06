import { useState, useEffect } from "react";
import { loadTasks } from "../../../services/loadData";

export default function useTasks() {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [list, setList] = useState([])

    useEffect(() => {
        const result = loadTasks()
        setTitle(result.title)
        setImage(result.image)
        setList(result.taskslist)
    }, [])

    return [title, image, list]
}