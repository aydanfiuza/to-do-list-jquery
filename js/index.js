$(document).ready(function() {
    $('#todo-form').on('submit', function(e) {
        e.preventDefault()

        if ($('#todo-input').val() == '') {
            alert('Insira uma tarefa corretamente.')
        } else {
            createTask()
        }    

        // funções

        function createTask() {
            var todoDiv = $('<div></div>')
            todoDiv.addClass('todo')

            var task = $('<h3></h3>').text($('#todo-input').val())
            todoDiv.append(task)

            var todoList = $('#todo-list')
            todoList.append(todoDiv)

            var finishButton = $('<button></button>')
            finishButton.addClass('finish-todo')
            finishButton.html('<i class="fa-solid fa-check"></i>')

            var editButton = $('<button></button>')
            editButton.addClass('edit-todo')
            editButton.html('<i class="fa-solid fa-pen"></i>')

            var removeButton = $('<button></button>')
            removeButton.addClass('remove-todo')
            removeButton.html('<i class="fa-solid fa-xmark"></i>')

            todoDiv.append(finishButton)
            todoDiv.append(editButton)
            todoDiv.append(removeButton)

        // eventos

        finishButton.on('click', () => {
            const targetEl = finishButton.closest("div")
            targetEl.toggleClass('done')
        })

        removeButton.on("click", () => {
            const parentEl = removeButton.closest("div")
            parentEl.remove()
        })
        }
    })
})