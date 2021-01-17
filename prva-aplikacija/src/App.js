import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home.js"
import Todos from "./components/Todos.js";
import Todo from "./components/Todo.js";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path="/todos" 
            children={<Todos />} 
          />
          <Route path="/todo/:id" 
            children={<Todo />} 
          />
        </Switch>
      </Router>
    </div>
  );
}
