import React from 'react';
import Button from './components/Button'
import TodoList from './components/TodoList'

class App extends React.Component {
  state = {
    todosWithUsers: null,
    sortedTodos: null,
    direction: 1,
    isLoading: false,
    isLoaded: false,
  }

  getData = async () => {
    this.setState({
      isLoading: true,
    })

    const responseTodos = await fetch('https://jsonplaceholder.typicode.com/todos');
    const responseUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    const todos = await responseTodos.json();
    const users = await responseUsers.json();

    const todosWithUsers = todos.map(todo => ({
      ...todo,
      user: users.find(user => user.id === todo.userId),
    }));

    this.setState({
      todosWithUsers: todosWithUsers,
      sortedTodos: todosWithUsers,
      isLoading: false,
      isLoaded: true,
    })
  }

  sortFunc = (typeSortBy) => {
    this.setState(state => ({
      direction: state.direction === 1 ? -1 : 1,
      sortedTodos: [...state.todosWithUsers].sort((a, b) => {
        switch(typeSortBy) {
          case 'byTitle':
            return a.title.localeCompare(b.title) * state.direction;
          case 'byUser':
            return a.user.name.localeCompare(b.user.name) * state.direction;
          case 'byCompleted':
            return (b.completed - a.completed) * state.direction;
          default:
            return 0;
        }
      }),
    }))
  }

  render() {
    return (
      <div>
        {
          this.state.isLoaded
            ? <TodoList 
                sortFunc={this.sortFunc}
                sortedTodos={this.state.sortedTodos}
              />
            : <Button 
                isLoading={this.state.isLoading}
                getData={this.getData}
              />
        }
      </div>
    )
  }
  
}

export default App;
