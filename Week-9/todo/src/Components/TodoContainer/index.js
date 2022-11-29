import React from "react";
import { v4 as uuidv4 } from "uuid";
import { BiX } from "react-icons/bi";
import TaskItem from "../TaskItem";
import "react-toastify/dist/ReactToastify.css";
import { BiPlusCircle } from "react-icons/bi";
import { GrUpdate } from "react-icons/gr";
import "./TodoContainer.css";

const data = [
  {
    id: uuidv4(),
    label: "Metting with client",
    description: "Call the client and fix the meeting",
    done: false
  },
  {
    id: uuidv4(),
    label: "Complete pesto bug",
    description: "Fix bug in login task and perform social login",
    done: true
  },
  {
    id: uuidv4(),
    label: "Buy gift for friend birthday",
    description: "It's mikes birthday buy some useful gift for him",
    done: false
  }
];

export default class ToDoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labelVal: "",
      discriptionVal: "",
      todos: data,
      editId: ""
    };
  }

  setLabel = (e) => {
    this.setState({
      labelVal: e.target.value
    });
  };

  setDescription = (e) => {
    this.setState({
      discriptionVal: e.target.value
    });
  };

  addTask = () => {
    if (this.state.labelVal !== "") {
      const task = {
        id: uuidv4(),
        label: this.state.labelVal,
        description: this.state.discriptionVal,
        done: false
      };

      const todos = this.state.todos;
      todos.push(task);
      this.setState({
        labelVal: "",
        discriptionVal: ""
      });
    }
  };

  taskComplete = (itemId) => {
    var updatedItems = this.state.todos.map((item) => {
      if (itemId === item.id) item.done = !item.done;

      return item;
    });
    // State Updates are Merged
    this.setState({ todos: updatedItems });
  };

  taskDelete = (itemId) => {
    var updatedItems = this.state.todos.filter((item) => {
      return item.id !== itemId;
    });

    this.setState({ todos: updatedItems });
  };

  taskEdit = (itemId) => {
    const todoItemIndex = this.state.todos.findIndex(
      (item) => item.id === itemId
    );
    if (todoItemIndex !== -1) {
      const todo = this.state.todos[todoItemIndex];
      this.setState({
        labelVal: todo.label,
        discriptionVal: todo.description,
        editId: itemId
      });
    }
  };

  taskCancel = () => {
    this.setState({
      labelVal: "",
      discriptionVal: "",
      editId: ""
    });
  };

  taskUpdate = () => {
    let itemId = this.state.editId;
    const todoItemIndex = this.state.todos.findIndex(
      (item) => item.id === itemId
    );
    if (todoItemIndex !== -1) {
      const todo = this.state.todos[todoItemIndex];
      todo.label = this.state.labelVal;
      todo.description = this.state.discriptionVal;

      this.setState({
        labelVal: "",
        discriptionVal: "",
        editId: "",
        todos: this.state.todos
      });
    }
  };

  taskUndo = (itemId) => {
    var undoItems = this.state.todos.map((item) => {
      if (itemId === item.id) item.done = !item.done;

      return item;
    });
    this.setState({ todos: undoItems });
  };

  render() {
    const pendingTasks = this.state.todos.filter((item) => !item.done);
    const completedTasks = this.state.todos.filter((item) => item.done);
    return (
      <>
        <div className="addToDoDiv">
          <input
            type="text"
            className="input"
            placeholder="Add a task"
            value={this.state.labelVal}
            onChange={this.setLabel}
          />
          <textarea
            placeholder="Details of your task "
            className="textarea"
            onChange={this.setDescription}
            value={this.state.discriptionVal}
          ></textarea>
        </div>
        <div className="flex">
          <button
            type="submit"
            className="btn"
            disabled={this.state.labelVal.length < 1}
            onClick={!this.state.editId ? this.addTask : this.taskUpdate}
          >
            {!this.state.editId ? (
              <>
                <BiPlusCircle />
              </>
            ) : (
              <>
                <GrUpdate />
              </>
            )}
          </button>
          {this.state.editId && (
            <button className="danger" onClick={this.taskCancel}>
              <BiX />
            </button>
          )}
        </div>

        <h4 className="title">Task To Do</h4>
        <ul>
          {pendingTasks.map((item) => {
            return (
              <TaskItem
                key={item.id}
                {...item}
                onTaskComplete={this.taskComplete}
                onTaskEdit={this.taskEdit}
              />
            );
          })}
        </ul>
        <h4 className="title">Completed Task</h4>
        <ul>
          {completedTasks.map((item) => {
            return (
              <TaskItem
                {...item}
                onTaskUndo={this.taskUndo}
                onTaskDelete={this.taskDelete}
              />
            );
          })}
        </ul>
      </>
    );
  }
}
