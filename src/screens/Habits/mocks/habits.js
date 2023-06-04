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
            doneDays: ['Domingo', 'Terça']
        },
        {
            habit: 'Leitura',
            icon: leitura,
            doneDays: ['Domingo', 'Segunda', 'Terça', 'Quinta']
        }
    ]
}