import React, { Component } from 'react';


class TodoForm extends Component {
    //Este metodo se ejecuta antes que toda la funcion
    constructor() {

    }


    render() {
        return(
            <div className = "card">
                <div className = "card-header bg-dark">
                    <h3 className = " text-primary">Add new Tast</h3>
                </div>
                <div className = "card-body">
                    <form action="">
                        <div className = "form-group">
                            <input type="text" placeholder = "enter name" className = "form-control"/>
                        </div>
                        <div className = "form-group">
                            <input type="text" placeholder = "Responsable" className = "form-control"/>
                        </div>
                        <div className = "form-group">
                            <input type="text" placeholder = "Descripcion" className = "form-control"/>
                        </div>
                        <div className = "form-group">
                            <select name="" id="" className = "form-control">
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