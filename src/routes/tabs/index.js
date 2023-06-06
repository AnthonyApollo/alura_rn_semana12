import Tasks from "../../screens/Tasks"
import Habits from "../../screens/Habits"

import ListIcon from "./assets/list.svg";
import HeartLine from "./assets/heartline.svg"

export const tabs = {
    Tasks: {
        component: Tasks,
        icon: ListIcon
    },
    Habits: {
        component: Habits,
        icon: HeartLine
    }
}
