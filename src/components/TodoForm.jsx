import React, { Component } from 'react';


class TodoForm extends Component {
    //Este metodo se ejecuta antes que toda la funcion
    constructor() {
        super();
        this.state = {
            title: '',
            responsable: '',
            descripcion: ' ',
            prioridad: 'low'

        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit(e) {

        console.log('enviando los datos');
        console.log(this.state);
        e.preventDefault();
    }
    render() {
        return(
            <div className = "card">
                <div className = "card-header bg-dark">
                    <h3 className = " text-primary">Add new Tast</h3>
                </div>
                <div className = "card-body">
                    <form action="" onSubmit = {this.handleSubmit}>
                        <div className = "form-group">
                            <input
                                type="text"
                                placeholder = "enter name"
                                className = "form-control"
                                onChange = {this.handleInput}
                                name = "title"
                            />
                        </div>
                        <div className = "form-group">
                            <input
                                type="text"
                                placeholder = "Responsable"
                                className = "form-control"
                                onChange = {this.handleInput}
                                name = "responsable"
                            />
                        </div>
                        <div className = "form-group">
                            <input
                                type="text"
                                placeholder = "Descripcion"
                                className = "form-control"
                                onChange = {this.handleInput}
                                name = "descripcion"

                            />
                        </div>
                        <div className = "form-group">
                            <select name="" id="" className = "form-control" onChange = {this.handleInput}>
                                <option value="">Low</option>
                                <option value="">Mediwm</option>
                                <option value="">High</option>
                            </select>
                        </div>
                        <button className = "btn btn-primary btn-block">Guardar</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default TodoForm;