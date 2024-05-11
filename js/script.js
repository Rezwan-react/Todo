let todoInput   = document.querySelector('.todoInput')
let todoButton  = document.querySelector('.todoButton')
let todoList    = document.querySelector('.todoList')






todoButton.addEventListener('click', ()=>{
   if(todoInput.value ==''){
    alert('Please enter todo')
   }else{
    // ============== creating tags
    let singelTodo  = document.createElement('div')
    let singelTodoInput = document.createElement('input')
    let EditButton = document.createElement('button')
    let DeleteButton = document.createElement('button')
    let br = document.createElement('br')


    //  ==================== append child
    todoList.appendChild(singelTodo)
    singelTodo.appendChild(singelTodoInput)
    singelTodo.appendChild(EditButton)
    singelTodo.appendChild(DeleteButton)



    //  ======================= add class list
        singelTodo.classList.add('singelTodo')
        singelTodoInput.classList.add('singelTodoInput')
        EditButton.classList.add('EditButton')
        DeleteButton.classList.add('DeleteButton')


    // ==================add content
    EditButton.innerHTML = 'Edit'
    DeleteButton.innerHTML = 'Delete'
    singelTodoInput.value = todoInput.value
    todoInput.value = ''


    // ============ set attribute
    singelTodoInput.setAttribute('readonly' , 'readonly')







    // ================= delete todo

    DeleteButton.addEventListener('click' , ()=>{
        singelTodo.remove()
    })

    // =============== edite todo

    EditButton.addEventListener('click' , ()=>{
       if(EditButton.innerHTML == 'Edit'){
         EditButton.innerHTML = 'Save'
         EditButton.style = 'background: green;'
         singelTodoInput.removeAttribute('readonly' , 'readonly')
       }else{
        EditButton.innerHTML = 'Edit'
        EditButton.style = 'background: yellowgreen;'
        singelTodoInput.setAttribute('readonly' , 'readonly')
       }
    })




   }
})

