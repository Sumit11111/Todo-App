import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./Todos";
import Header from "./Header";
import AddTodo from "./AddTodo";
import About from "./About";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  delItem = id => {
    this.setState({ todos: this.state.todos.filter(todos => todos.id !== id) });
  };

  addTodo = title => {
    const newTodo = {
      id: Math.random(),
      title: title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  markComplete = id => {
    this.setState(
      this.state.todos.map(todos => {
        if (todos.id === id) {
          todos.completed = !todos.completed;
        }
        return todos;
      })
    );
  };
  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delItem={this.delItem}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
