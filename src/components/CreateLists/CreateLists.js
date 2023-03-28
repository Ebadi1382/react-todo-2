import React from "react";
import "./CreateLists.css"

const CreateLists = ({text , todos , todo , setTodo})=> {

    const deleteHandler = ()=> {
        setTodo(todos.filter((item)=>item.id !== todo.id))
    }
    const success =()=> {
        setTodo(todos.map((item) => {
            if (item.id===todo.id) {
                return {
                    ...item, compelete: !item.compelete
                }
            }
            return item
        }))
    }

    return(
    <React.Fragment>
        <div className={`new-div ${todo.compelete ? "success" : "" }`}>
            <p className={`new-text ${todo.compelete ? "success" : "" }`}>{text}</p>
        <div className={`btn-div ${todo.compelete ? "success" : "" }`}>
            <button onClick={success} className={`btn-new ${todo.compelete ? "success" : "" }`}>
            <i className={`fa-solid ${todo.compelete ? "success" : "" } fa-check`}></i>
            </button>
            <button onClick={deleteHandler} className={`btn-new ${todo.compelete ? "success" : "" }`}>
            <i className={`fa-solid ${todo.compelete ? "success" : "" } fa-xmark`}></i>
            </button>
        </div>
        </div>

    </React.Fragment>
    )
}


export default CreateLists