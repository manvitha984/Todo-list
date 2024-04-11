import React, { useState } from "react";

const Addtodo = (props) => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or description is not defined");
    }
    else{
    props.Addtodos(title, desc);
    settitle("");
    setdesc("");
    }
  };
  return (
    <div className="container my-3">
      <h3>Add a todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo description
          </label>
          <input
            type="text"
            onChange={(e) => {
              setdesc(e.target.value);
            }}
            value={desc}
            className="form-control"
            id="desc"
          />
        </div>

        <button type="submit" className="btn btn-sm btn-success">
          Add todo
        </button>
      </form>
    </div>
  );
};

export default Addtodo;
