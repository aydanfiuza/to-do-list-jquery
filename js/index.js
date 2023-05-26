$(document).ready(function() {
    var todoForm = $('#todo-form')

    todoForm.on("submit", function(e) {
        e.preventDefault()

        var todoValue = $('#todo-input').val()

        if (todoValue == '') {
           alert('Insira uma tarefa corretamente.')
        } else {
            console.log(todoValue)
        }

        var todoDiv = $('<div></div>')
        todoDiv.addClass("todo")

        var task = $('<h3></h3>').text(todoValue)
        todoDiv.append(task)

        var todoList = $('#todo-list')

        todoList.append(todoDiv)
    })
})