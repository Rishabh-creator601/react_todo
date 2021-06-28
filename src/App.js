import React,{useState } from "react";
import "./style.css";
import Header from "./MyComponents/Header";
import {AddTodo } from "./MyComponents/AddTodo";
import {TodoList} from "./MyComponents/TodoList";



export default function App() {
const onDelete = (todo ) =>{
  //console.log("deleting ...",todo);

 setValues(values.filter((val )=>{
 return val !== todo  ;

 }));

}

 const addtodo = (title,desc ) =>{
 //consoleconsole.log("adding ", title,desc );
 let sno = values[values.length-1 ].sno +1;
 let newTodo = {
   sno : sno,
   title: title,
   data : desc 
 }

 //console.log(newTodo );
 setValues([...values,newTodo]);

 } 




const [values,setValues] = useState([
{ 
  "sno ": 1,
  "title":"Task1",
  "data":"This is my task 1"
},
{
  "sno":2,
  "title":"Task 2",
  "data" : "This is my task 2 "
}



]);
  return (
    <>
    <Header />
    <AddTodo addtodo={addtodo}/>
    <TodoList 
    todos ={values} onDelete={onDelete}/>
    </>
  );
}

export default App;
