import React,{useState} from "react";






export const AddTodo = ({addtodo}) =>{


const [title,setTitle ] = useState("");
const [desc ,setDesc ] = useState("");

const submit = (e) =>{
e.preventDefault();
if(!title || !desc ){
  alert("these cannot be empty ");
}
else{
  addtodo(title,desc);
}




}

return (
<>
  
<h3 class="text-center "> Add a new Todo </h3>
<hr />

<div class="container">
<form onSubmit={submit }>


<input type="text" value={title } class="form-control" placeholder="Enter a new todo here ...." onChange={((e)=>{

setTitle(e.target.value); 


})}/>

<input type="text" value ={desc} class="form-control" placeholder="Enter a new desc  here ...." onChange={((e)=>{
  setDesc(e.target.value );
})}/>



<p> </p>
<button type="Submit" class="btn btn-primary "> Add Todo  </button>

</form>

</div> 
</>


);


}