import React    from "react";
import template from "./ToDoList.jsx";

class ToDoList extends React.Component {
  render() {
    return template.call(this);
  }
}

export default ToDoList;
