import React, { Component } from 'react';

export default class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      inputValue: "",
    };
  }

  componentDidMount() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.setState({ tasks: JSON.parse(storedTasks) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
  }

  addTask = () => {
    if (this.state.inputValue.trim() === '') {
      alert('You must write something');
    } else {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, { text: prevState.inputValue, checked: false }],
        inputValue: '',
      }));
    }
  };

  toggleTask = (index) => {
    const newTasks = this.state.tasks.map((task, i) =>
      i === index ? { ...task, checked: !task.checked } : task
    );
    this.setState({ tasks: newTasks });
  };

  deleteTask = (index) => {
    const newTasks = this.state.tasks.filter((_, i) => i !== index);
    this.setState({ tasks: newTasks });
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="todoapp">
          <h2>
            TO-DO List <img src="./pencil-square.svg" alt="" />
          </h2>

          <div className="row">
            <input
              type="text"
              placeholder="Add your text"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
            />
            <button onClick={this.addTask}>Add</button>
          </div>

          <ul id="list-container">
            {this.state.tasks.map((task, index) => (
              <li
                key={index}
                className={task.checked ? 'checked' : ''}
                onClick={() => this.toggleTask(index)}
              >
                {task.text}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    this.deleteTask(index);
                  }}
                >
                  &times;
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

