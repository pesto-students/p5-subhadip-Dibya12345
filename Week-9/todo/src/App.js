import React from "react";
import ToDoContainer from "./Components/TodoContainer";
import "./index.css";
import Header from "./Components/Header";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="toDoContainer">
          <div className="toDo">
            <ToDoContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
