import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Tasks from './component/tasks';
import TaskForm from './component/TaskForm';
import tasks from './sample/tasks.json';
import Post from './component/Post';
import Navbar from './component/Navbar';

class App extends Component {
  state = {
    tasks: tasks,
  };

  addTask = (tittle, description) => {
    const newTask = {
      tittle: tittle,
      description: description,
      id: this.state.tasks.length,
    };

    ///con esta instrucción agregamos en el estado de las tareas las tareas ya existente
    ///Más la nueva usando la modalidad spread de EMSCRIPT6
    this.setState ({
      tasks: [...this.state.tasks, newTask],
    });
  };

  deleteTask = id => {
    const newTask = this.state.tasks.filter (task => task.id !== id);
    this.setState ({
      tasks: newTask,
    });
  };

  checkDone = id => {
    const newTasks = this.state.tasks.map (task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState ({tasks: newTasks});
  };

  render () {
    return (
      <div className="container">
        <Router>
          <Navbar />
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div className="container">
                  <div className="col-md-5">
                    <TaskForm addTask={this.addTask} />
                  </div>
                  <div className="col-md-5">
                    <Tasks
                      tasks={this.state.tasks}
                      deleteTask={this.deleteTask}
                      checkDone={this.checkDone}
                    />
                  </div>
                </div>
              );
            }}
          />
          <Route path="/post" component={Post} />
        </Router>
      </div>
    );
  }
}

export default App;
