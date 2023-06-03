import atvFisica from '../../../assets/atividade-fisica.png'
import leitura from '../../../assets/leitura.png'
import imgHabits from '../assets/habitos.png'

export const habits = {
    title: 'Meus hábitos',
    image: imgHabits,
    habitsList: [
        {
            habit: 'Correr',
            icon: atvFisica,
            daysDone: ['Sunday', 'Tuesday']
        },
        {
            habit: 'Leitura',
            icon: leitura,
            daysDone: ['Sunday', 'Monday', 'Tuesday', 'Thursday']
        }
    ]
}