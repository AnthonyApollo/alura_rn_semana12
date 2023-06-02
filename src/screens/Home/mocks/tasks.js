import atvFisica from '../../../assets/atividade-fisica.png'
import computador from '../../../assets/computador.png'
import coracao from '../../../assets/coracao.png'
import email from '../../../assets/email.png'
import leitura from '../../../assets/leitura.png'
import musica from '../../../assets/musica.png'
import imgTask from '../assets/tarefas.png'

export const tasks = {
  title: 'Minhas tarefas',
  image: imgTask,
  taskslist: [
    {
      task: 'Estudar React-Native',
      icon: computador,
      isDone: true
    },
    {
      task: 'Ler livro novo',
      icon: leitura,
      isDone: false
    },
    {
      task: 'Escutar nova música do FF',
      icon: musica,
      isDone: true
    },
    {
      task: 'Voltar pra academia',
      icon: atvFisica,
      isDone: false
    },
    {
      task: 'Lavar a louça',
      icon: coracao,
      isDone: false
    },
    {
      task: 'Responder e-mails',
      icon: email,
      isDone: false
    }
  ]
}