import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]
class SimpleTodos extends Component {
  state = {todosList: initialTodosList, todoInput: ''}
  userDelete = id => {
    const {todosList} = this.state
    const filteredUser = todosList.filter(each => each.id !== id)
    this.setState({todosList: filteredUser})
  }
  onInputChange = event => {
    this.setState({todoInput: event.target.value})
  }
  onUpdateTask = (id, task) => {
    const {todosList} = this.state
    const updatedList = todosList.map(eachTodo =>
      eachTodo.id === id ? {...eachTodo, title: task} : eachTodo,
    )
    this.setState({todosList: updatedList})
  }
  renderSingleTodo = () => {
    const {todosList, todoInput} = this.state
    const idOfNewTodo = todosList.length + 1
    const newTodo = {id: idOfNewTodo, title: todoInput}
    this.setState(prevState => ({
      todosList: [...prevState.todosList, newTodo],
      todoInput: '',
    }))
  }
  renderMultipleTodo = arr => {
    const newTodoArray = []
    const {todosList, todoInput} = this.state
    console.log(todoInput)
    const num = parseInt(arr[1])
    const titleTask = arr[0]
    for (let i = 0; i < num; i++) {
      const idOfNewTodo = todosList.length + 1 + i
      const newTodo = {id: idOfNewTodo, title: titleTask}
      newTodoArray.push(newTodo)
    }
    this.setState(prevState => ({
      todosList: [...prevState.todosList, ...newTodoArray],
      todoInput: '',
    }))
  }
  onAddBtnClick = () => {
    const {todosList, todoInput} = this.state
    const inputString = todoInput.split(' ')

    if (inputString.length === 1) {
      this.renderSingleTodo()
    } else {
      this.renderMultipleTodo(inputString)
    }
  }
  renderInputAndAddButton = () => {
    const {todoInput} = this.state
    return (
      <>
        <div className="input-add-container">
          <input
            type="text"
            placeholder="Enter Yout Task Here"
            onChange={this.onInputChange}
            className="input"
            value={todoInput}
          />
          <button
            type="button"
            className="add-button"
            onClick={this.onAddBtnClick}
          >
            Add
          </button>
        </div>
      </>
    )
  }

  render() {
    const {todosList} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="title">Simple Todos</h1>

          {this.renderInputAndAddButton()}

          <ul className="list-container">
            {todosList.map(eachTodo => (
              <TodoItem
                todoItem={eachTodo}
                userDelete={this.userDelete}
                key={eachTodo.id}
                onUpdateTask={this.onUpdateTask}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
