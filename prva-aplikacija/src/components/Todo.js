import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import '../styles/Todo.css'


const Todo = () => {
  const { id } = useParams();

  const [todoDetails, setTodoDetails] = useState();

  useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())
      .then((data) => {
        const responseTodo = data;
        setTodoDetails(responseTodo);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { id: todoId, userId, title, completed } = todoDetails || {};
  return (
    <div>
      {todoDetails ? (
      <div
        style={{
          backgroundColor: 'rgb(25, 135, 84)',
          height: '625px'
        }}
      >
        <Card border='success'
          style={{ 
            width: '40rem',
            marginLeft: '23rem',
          }}
        >
          <Card.Header className="Header">          
            <h1> {`ID: ${todoId}`} </h1>
          </Card.Header>
          <Card.Body>
            <Card.Text className="Text">
              <h5>{`UserID: ${userId}`}</h5>
              <h5>{`Title: ${title}`}</h5>
              <h5>{`Completed: ${completed}`}</h5>    
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      ) : (
      <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Todo;
