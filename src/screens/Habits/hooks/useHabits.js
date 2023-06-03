import { useState, useEffect } from "react";
import { loadHabits } from "../services/loadHabits";

export default function useHabits() {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [list, setList] = useState([])

    useEffect(() => {
        const result = loadHabits()
        setTitle(result.title)
        setImage(result.image)
        setList(result.habitsList)
    }, [])

    return [title, image, list]
}