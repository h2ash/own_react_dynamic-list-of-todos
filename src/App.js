import React from 'react';
import Button from './components/Button'
import TodoList from './components/TodoList'
import { thisExpression } from '@babel/types';

class App extends React.Component {
  state = {
    todosWithUsers: null,
    sortedTodos: null,
    isLoading: false,
    isLoaded: false,
  }

  getData = async () => {
    this.setState({
      isLoading: true,
    })

    // получаем данные с сервера
    const responseTodos = await fetch('https://jsonplaceholder.typicode.com/todos');
    const responseUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    const todos = await responseTodos.json();
    const users = await responseUsers.json();

    // добавляем к одной тудушке нужного юзера
    const todosWithUsers = todos.map(todo => ({
      ...todo,
      user: users.find(user => user.id === todo.userId),
    }));
    console.log(todosWithUsers);

    this.setState({
      todosWithUsers: todosWithUsers,
      sortedTodos: todosWithUsers,
      isLoading: false,
      isLoaded: true,
    })
  }

  sortFun = (typeSortBy) => {
    this.setState(state => ({
      sortedTodos: [...state.todosWithUsers].sort((a, b) => {
        switch(typeSortBy) {
          case 'byTitle':
            return a.title.localeCompare(b.title);
          case 'byUser':
            return a.user.name.localeCompare(b.user.name);
          case 'byCompleted':
            return (b.completed - a.completed);
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
                sortFun={this.sortFun}
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
