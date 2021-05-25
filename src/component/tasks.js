import React, { Component } from "react"
import Task from "./task"
import Proptypes from 'prop-types'

class Tasks extends Component {

    render() {
        return this.props.tasks.map(el =>
            <Task task={el} key={el.id} deleteTask={this.props.deleteTask} checkDone={this.props.checkDone} />
        )
    }
}

Task.prototypes = {
    tasks: Proptypes.array.isRequired
}


export default Tasks