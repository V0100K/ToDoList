import React    from "react";
import template from "./ToDoListBlock.jsx";

class ToDoListBlock extends React.Component {
  render() {
    return template.call(this);
  }
}

export default ToDoListBlock;
