import React from "react";

const TodoListOutput =(props)=>{
   
return<>
    <li>
         <i className="fa fa-times" aria-hidden="true"
          onClick={()=>{
            props.onSelect(props.id)
            }}
           />
         {props.text}
    </li>
</>
}
export default TodoListOutput;