import React from "react";
import "./CreateHelp.css";
import CreateLists from "../CreateLists/CreateLists"

const CreateHelp = ({todos , setTodo , filterstodo}) => {
  return (
    <React.Fragment>
      <div className="main-div">
        {
            filterstodo.map((todo)=>(
                <CreateLists 
                key={todo.id} 
                text={todo.text}
                todo = {todo}
                todos={todos}
                setTodo={setTodo} 
                />
            ))
        }
      </div>
    </React.Fragment>
  );
};

export default CreateHelp;


