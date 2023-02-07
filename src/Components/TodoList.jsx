import React, { useState } from "react";
import './TodoList.css'
import TodoListOutput from "./TodoListOutput";
const TodoList = ()=>{
    const[item,setItem]=useState("")//itemEvent
    const[itemList,setItemList]=useState([]) //addItem
   const itemEvent=(event)=>{
// console.log(event.target.value);
setItem(event.target.value)
    }
    const addItem=()=>{
        setItemList((oldItemArr)=>{
            return([...oldItemArr,item])
        });
        setItem("");
    }
    const deleteItem=(id)=>{
        console.log("deleted")
        setItemList((oldItemArr)=>{
            return oldItemArr.filter((arrElement,index)=>{
                return index!== id
            })
        })
    }

return(
    <div className="main-container">
        <div className="container">
            <h1>ToDo List</h1>
            <input onChange={itemEvent} type="text" 
            value={item} placeholder="Add a Items" />
            <button onClick={addItem}>+</button>
            <ol>
                {/* <li>{item}</li> */}
                
               { itemList.map((itemValue,index)=>{
                    return <TodoListOutput
                    key={index}
                    id={index}
                     text={itemValue}
                     onSelect={deleteItem} />
                })}
            </ol>
        </div>
    </div>
)
}
export default TodoList;