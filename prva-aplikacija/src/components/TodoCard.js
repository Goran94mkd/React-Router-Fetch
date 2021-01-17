import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';

const TodoCard = (props) => {
  const { todo } = props;
  const { id } = todo;
  let history = useHistory();

  return (
    <div style={{background: "rgb(214, 178, 50)", width: "273px"}}>
      <Button variant="success"
        style={{
          margin: "10px",
          padding: "15px",
          width: "250px",
          textAlign: 'center'
        }}
        onClick={() => history.push(`/todo/${id}`)}
      >
        <h4> {id} </h4>
      </Button>
    </div>
  );
};

export default TodoCard;
