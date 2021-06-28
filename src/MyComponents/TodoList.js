import React from 'react';
import {Todo} from "../MyComponents/Todo";

export const TodoList = (props) =>{
  return (
   <div className="container"> 
   <h3 className="text-center"> Todos List  </h3>
   <hr />
  {props.todos.map((todo)=>{

return   <Todo key={todo.sno }
onDelete ={props.onDelete}
 todo = {todo }/>
  })}

   
   
   
   </div>
    
  );



}