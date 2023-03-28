import React, { useEffect, useState } from "react";
import Create from "./components/created/Create";
import CreateHelp from "./components/CreateHelp/CreateHelp";

const App = () => {
  const [inputText , setInputText] = useState("")
  const [todos , setTodo] = useState([])
  const [status , setstatus] = useState("all")
  const [filterstodo,setFiltersTodo] = useState([])

  useEffect(()=> {
    filtertodoselect();
  },[todos,status])

  const filtertodoselect = ()=> {
    switch (status) {
      case "compelete":
        setFiltersTodo(todos.filter((item)=> item.compelete === true));
        break;
      case "uncompelete":
        setFiltersTodo(todos.filter((item)=> item.compelete === false));
        break;
      default:
      setFiltersTodo(todos);
        break;
    }
  }

  return(
  <React.Fragment>
   <Create
  setInputText={setInputText}
  inputText = {inputText}
  todos = {todos}
  setTodo = {setTodo}
  setstatus = {setstatus}
  />
   <CreateHelp 
   todos={todos}
   setTodo={setTodo}
   filterstodo={filterstodo}
   />
  </React.Fragment>
  )
};

export default App;
