let taskLists = [
    { id: '1', title: 'Estudos', tasks: [{ id: '1', title: 'Estudar Node', completed: false }] },
    { id: '2', title: 'Tarefas de Casa', tasks: [] },
    { id: '3', title: 'Coisas do Trabalho', tasks: [] }
]

module.exports = {
    getAllTaskLists: () => {
        return taskLists
    },

    getTaskListById: (id) => {
        return taskLists.find(list => list.id === id)
    },

    createList: (title) => {
        const newList = {
            id: Math.floor(Math.random() * 99999999).toString(),
            title: title,
            tasks: []
        }
        return newList
    },

    saveList: (taskList) => {
        if (taskList.title === '') {
            throw new Error('Titulo da lista não pode ficar vazio.')
        } 
        
        taskLists.push(taskList)
    },

    addTask: (listId, taskTitle) => {
        const newTask = {
            id: Math.floor(Math.random() * 99999999).toString(),
            title: taskTitle,
            completed: false
        }
        taskLists.find(list => list.id === listId).tasks.push(newTask)
    },

    completeTask: (listId, taskId) => {
        const taskList = taskLists.find(list => list.id === listId)
        const task = taskList.tasks.find(list => list.id === taskId)

        task.completed = true
    },

    undoTask: (listId, taskId) => {
        const taskList = taskLists.find(list => list.id === listId)
        const task = taskList.tasks.find(list => list.id === taskId)

        task.completed = false
    },

    deleteList: (listId) => {
        const listIndex = taskLists.findIndex(list => list.id === listId)
        taskLists.splice(listIndex, 1) 
        //podemos resolver usando o filter tambem
        //taskLists = taskLists.filter(list => list.id !== id)
    }
}