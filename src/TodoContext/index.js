import React, { createContext } from 'react'
import { useLocalStorage } from './useLocalStorage'

const TodoContext = createContext()

function TodoProvider(props) {
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', [])
      const [searchTerm, setSearchTerm] = React.useState('')
      const [openModal, setOpenModal] = React.useState(false)
    
      const completedTodos = todos.filter( todo => !!todo.completed ).length
      const totalTodos = todos.length
    
      let searchedTodos = [];
    
      if (!searchTerm.length >= 1) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter( todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchTerm.toLowerCase()
            return todoText.includes(searchText)
          }
        )
      }

      const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
          completed: false,
          text: text
        })
        saveTodos(newTodos)
      };
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            setSearchTerm,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }