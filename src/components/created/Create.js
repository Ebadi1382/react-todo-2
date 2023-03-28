import React from "react";
import "./Create.css";

const Create = ({setInputText,inputText,todos,setTodo, setstatus})=> {

    const inputTexthandler = (e) => {
        setInputText(e.target.value)
      }
      const clickHandler =(e) => {
        e.preventDefault()
        if (inputText) {
            setTodo([
                ...todos,
                {text: inputText , compelete : false, id : Date.now()}
            ]);
            setInputText("")
          }else {
            setInputText("please write something ...")
          }
        }
        const changeSelectHandler = (e)=> {
            setstatus(e.target.value)
      }

      
    return(
    <React.Fragment>
        <div className="mainheader">
        <form className="form-control">
            <input value={inputText} onChange={inputTexthandler} className="input-form" type="text" placeholder="Add your Subject"></input>
            <button onClick={clickHandler} className="btn-form">ADD</button>
        </form>
        <select onChange={changeSelectHandler} className="select">
            <option value="all">All</option>
            <option value="compelete">Compelete</option>
            <option value="uncompelete">uncompelete</option>
        </select>
        </div>
    </React.Fragment>
    )
}



export default Create;