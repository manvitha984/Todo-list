import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import Addtodo from "./components/Addtodo";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const ondelete = (todo) => {
    console.log("i am delete on", todo);
    settodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.getItem("todos", JSON.stringify(todos));
  };
  const Addtodos = (title, desc) => {
    console.log("i am adding");
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    settodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, settodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={true} />
        
        <Routes>
          {/* Use a parent route to nest other routes */}
          <Route path="/" element={<Addtodo Addtodos={Addtodos} />}>
            {/* Use index route for the default route within the parent */}
            <Route index element={<Todos todos={todos} ondelete={ondelete} />} />
          </Route>
  
          {/* Add other routes here */}
          <Route path="/About" element={<About />} />
        </Routes>
  
        <Footer />
      </Router>
    </>
  );
  
}

export default App;
