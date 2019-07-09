import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ sortedTodos, sortFunc }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th onClick={() => {
          sortFunc('byTitle')
        }}>Title</th>
        <th onClick={() => {
          sortFunc('byUser')
        }}>User</th>
        <th onClick={() => {
          sortFunc('byCompleted')
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