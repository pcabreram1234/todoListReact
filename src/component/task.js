
import React, { Component } from "react"
import Proptypes from 'prop-types'
import './task.css'

class Task extends Component {

    styleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render() {
        /* Destruturamiento de JS con este almaceno el objeto de tareas en una constante llamada task */
        const { task } = this.props
        return (
            <div style={this.styleCompleted()} className="container d-flex float-end">
                <div key={task.id} className="m-2 p-2">
                    {task.title} -
                    {task.description} -
                    {task.done} -
                    {task.id}
                    <input type="checkbox" className="input m-1" onChange={this.props.checkDone.bind(this, task.id)} />
                    <button className="btn btn-outline-danger rounded-circle" onClick={this.props.deleteTask.bind(this, task.id)}>x</button>
                </div>
            </div >
        )
    }
}

Task.prototypes = {
    task: Proptypes.object.isRequired
}

export default Task