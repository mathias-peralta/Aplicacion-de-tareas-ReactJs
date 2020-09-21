import React, { Component } from 'react';


class Card extends Component {

    constructor() {
        super();
        this.remove = this.remove.bind(this);
    }

    remove() {
        this.props.removeTodo(this.props.indice)
    }
    render(){
        return(
            <div className = "col-md-4 mt-4" key = {this.props.indice}>
                <div className = "card">
                    <div className = "card-header">
                        <h3>{this.props.titulo}</h3>
                        <span className = "badge badge-pill badge-danger ml-2">{ this.props.prioridad }</span>
                    </div>
                    <div className = "card-body">
                        <p>{this.props.descripcion}</p>
                        <p>{this.props.responsable}</p>
                    </div>
                    <div className = "card-footer">
                        <button 
                        className = "btn btn-danger"
                        onClick = {this.remove}
                        >Eliminar</button>
                    </div>
                </div>
          </div>
        )
    }
}

export default Card;