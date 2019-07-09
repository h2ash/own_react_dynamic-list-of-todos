import React from 'react'

const TodoItem = ({currentTodo}) => (
  <tr>
    <td>{currentTodo.id}</td>
    <td>{currentTodo.title}</td>
    <td>{currentTodo.user.name}</td>
    <td>
      {
        currentTodo.completed
          ? 'yes'
          : 'no'
      }
    </td>
  </tr>
)

export default TodoItem