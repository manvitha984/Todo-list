import React from "react";
import Todo from "../components/Todo";
const Todos = (props) => {
  const myStyle={
       minHeight:"70vh",
       margin:"40px auto",
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length===0?"no todos to display":
      props.todos.map((todo) => {
        return(
          <>
        <Todo todo={todo} ondelete={props.ondelete}/>  
        <hr/> 
        </>
        )

      })
    }
    </div>
  );
};

export default Todos;
