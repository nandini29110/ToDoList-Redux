import React,{useState} from "react";
import "./todo.css";
import {useSelector,useDispatch} from "react-redux"; 
import {addTodo,deleteTodo,removeTodo} from "../actions/index";

const Todo=()=>{
    const[inputData,setInputData]=useState("");
    const list=useSelector((state)=>state.todoReducers.list);
    const dispatch=useDispatch();
   return(

             <div className="main-div">
    <div className="child-div">
    <figure>
      <figcaption>Add Your List Here ...</figcaption>
    </figure>

   <div className="add-item">
   <input type="text" placeholder=" Add Items ..."
       value={inputData}
       onChange={(event)=>setInputData(event.target.value)}
   />
   <i className="fa fa-plus add-btn"  onClick={()=>dispatch(addTodo(inputData),setInputData("")) }></i>
   </div>
     <div>
         {
             list.map((element)=>{
                 return(
                    <div key={element.id}>
                        <h3>{element.data}</h3>
                        <div>
                        <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=> dispatch(deleteTodo(element.id))}></i>
                        </div>
                  </div>
                 );
             })
         }

     </div>
   
    </div>
    </div>
   );
}

export default Todo;