const list = document.querySelector('table')
const input = document.querySelector('input')
const span = document.querySelector('span')
const todos = []

const deleteRow = (todoName) => {
    const index = todos.indexOf(todoName)
    todos.splice(index,1)
    list.deleteRow(index)
}

const addTableRow = (todoName) => {
    const tr = list.insertRow()
    const td1 = tr.insertCell(0)
    td1.innerHTML = todoName
    const td2 = tr.insertCell(1)
    td2.innerHTML = '<a href="#" onClick="deleteRow(\'' + todoName + '\')">x</a>'
}

span.addEventListener('click', () => {
    todos.sort()

    for (let i = todos.length-1;i>=0;i--) {
        list.deleteRow(i)
    }

    todos.forEach((todo) => {
       addTableRow(todo)
    })
})

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const newTodo = input.value
        todos.push(newTodo)
        addTableRow(newTodo)
        input.value = ''
    }
})