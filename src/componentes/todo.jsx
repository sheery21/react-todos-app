import { useState } from "react";
import Button from "./button";
import style from "./todo.module.css";
import sty from "./btn.module.css";
import Input from "./input";

const Todo = () => {
  let [userinput, setinput] = useState("");
  let [todos, setTodos] = useState([]);
  let [editIndex, setEditIndex] = useState(null);
  let [editValue, setEditValue] = useState("");

  const handleInput = (e) => {
    setinput(e.target.value);
  };

  const addTodo = () => {
    if (userinput.trim() === "") return;
    setTodos([...todos, userinput]);
    setinput("");
  };

  const removeAll = () => setTodos([]);


  const startEdit = (index) => {
    setEditIndex(index);
    setEditIndex(index);
  };
  const removeTodo = (index) => {
    let newTodos = [...todos]
    newTodos.splice(index,1);
    setTodos(newTodos)
  };
  const saveEdit = (index) => {
    let newTodos = [...todos];
    newTodos.splice([index],1,editValue) ;
    setTodos(newTodos);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div className={style.container}>
      <div className={style.mainDiv}>
        <h1 className={style.h1}>Todos</h1>
        <div className={style.inputDiv}>
          <Input value={userinput} onChange={handleInput} />
          <Button onClick={addTodo} label="Add Todo" />
          <Button onClick={removeAll} className={sty.red} label="Deleted All" />
        </div>
        <div className={style.ulDiv}>
          <ul>
            {todos.map((value, index) => (
              <li className={style.ul} key={index}>
                {editIndex === index ? (
                  <>
                    <Input
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                    />
                    <Button
                      className={sty.edit}
                      onClick={() => saveEdit( () =>editValue(index))}
                      label={"Save"}
                    />
                  </>
                ) : (
                  <>
                    {value}
                    <div className={style.editDiv}>
                      <Button
                        onClick={() => startEdit(index)}
                        className={sty.edit}
                        label={"Edit"}
                      />
                      <Button
                        onClick={() => removeTodo(index)}
                        className={sty.remove}
                        label={"Remove"}
                      />
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
