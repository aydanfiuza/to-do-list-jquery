$(document).ready(function() {
    $('#todo-form').on('submit', function(e) {
        e.preventDefault()

        if ($('#todo-input').val() == '') {
            $('.alert').removeClass('hide')
        } else {
            createTask()
            $('.alert').addClass('hide')
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
        }

        // eventos

        $(document).on('click', '.finish-todo', function() {
            const targetEl = $(this).closest("div")
            targetEl.toggleClass('done')
        })

        $(document).on('click', '.remove-todo', function() {
            const parentEl = $(this).closest("div")
            parentEl.remove()
        })
    })
})