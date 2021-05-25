import React, { Component } from "react"

export default class TaskForm extends Component {

    state = {
        tittle: '',
        description: ''
    }

    onSubmit = (e) => {
        this.props.addTask(this.state.tittle, this.state.description)
        e.preventDefault()
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="container d-flex float-start">
                <form action="?" className="" onSubmit={this.onSubmit}>
                    <div className="input-group my-1">
                        <input type="text" name="tittle" id="" placeholder="Write a task" className="input-group-text"
                            onChange={this.inputChange} value={this.state.tittle} />
                    </div>
                    <div className="input-group my-1">
                        <textarea name="description" id="" cols="30" rows="10" placeholder="Write a description" className="input-group-text"
                            onChange={this.inputChange} value={this.state.description}>
                        </textarea>
                    </div>
                    <div className="input-group my-1">
                        <input type="submit" className="btn btn-outline-success" />
                    </div>
                </form>
            </div>
        )
    }

}

