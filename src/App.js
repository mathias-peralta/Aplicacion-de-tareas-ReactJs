import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from './components/Navigation';
import { todos } from './todos.json';
import TodoForm from './components/TodoForm';
import Card from './components/Card';

console.log(todos);
class App extends Component {
  //es lo primero que se ejecuta
  constructor() {
    super();//esto hace que herede todas las funcionalidades de react
    this.state = {
      todos //los datos ya se encuentran dento del estado
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  handleAdd(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
    
  }
  removeTodo(i){
    if(window.confirm('Estas seguro que desea elminar este componente?')){
      this.setState({
        todos: this.state.todos.filter((e, indice) => {
          return indice !== i
        })
      })
    }
  }

  render() {
    const todos = this.state.todos.map((todo, indice) => {
      return(
        <Card
          titulo = {todo.title}
          responsable = {todo.responsable}
          descripcion = {todo.descripcion}
          prioridad = {todo.prioridad}
          key = {indice}
          indice = {indice}
          removeTodo = {this.removeTodo}
        />
      )
    })

    return(
      <div className = "App">
        <Navigation contador = {this.state.todos.length}/> 
        <div className = "container">
          <div className = "row mt-4">
            <div className = "col-md-4 mt-4">
              <TodoForm onAdd = {this.handleAdd}/>
            </div>
            <div className = "col-md-8">
              <div className = "row ">
                {todos}
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}



export default App;
