import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from './components/Navigation';
import { todos } from './todos.json';
import TodoForm from './components/TodoForm';

console.log(todos);
class App extends Component {
  //es lo primero que se ejecuta
  constructor() {
    super();//esto hace que herede todas las funcionalidades de react
    this.state = {
      todos //los datos ya se encuentran dento del estado
    }
  }
  render() {
    const todos = this.state.todos.map((todo, indice) => {
      return(
        <div className = "col-md-4 mt-4">
          <div className = "card">
            <div className = "card-header">
              <h3>{todo.title}</h3>
              <span className = "badge badge-pill badge-danger ml-2">{todo.prioridad }</span>
            </div>
            <div className = "card-body">
              <p>{todo.descripcion}</p>
              <p>{todo.responsable}</p>
            </div>
          </div>
        </div>

      )
    })
    return(
      <div className = "App">
        <Navigation contador = {this.state.todos.length}/> 
        <div className = "container">
          <div className = "row mt-4">
            <div className = "col-md-4 mt-4">
              <TodoForm />
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
