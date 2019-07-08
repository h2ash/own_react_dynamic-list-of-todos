import React from 'react';
import Button from './components/Button'

class App extends React.Component {
  state = {
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

    this.setState({
      isLoading: false,
      isLoaded: true,
    })
  }

  render() {
    return (
      <div>
        {
          this.state.isLoaded
            ? 'zaglushka for isLoaded'
            : <Button 
                isLoading={this.state.isLoading}
                getData={this.getData}
                todosWithUsers={this.getData.todosWithUsers}
              />
        }
      </div>
    )
  }
  

}

export default App;
