import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ sortedTodos, sortFun }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th onClick={() => {
          sortFun('byTitle')
        }}>Title</th>
        <th onClick={() => {
          sortFun('byUser')
        }}>User</th>
        <th onClick={() => {
          sortFun('byCompleted')
        }}>Completed</th>
      </tr>
    </thead>
    <tbody>
      {
        sortedTodos.map(todo => (
          <TodoItem currentTodo={todo} />
        ))
      }
    </tbody>
  </table>
)

export default TodoList