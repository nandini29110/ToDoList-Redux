import React,{useState} from "react";
import "./todo.css";
import {useSelector,useDispatch} from "react-redux"; 
import {addTodo,deleteTodo,deleteAllTodo} from "../actions/index";

const Todo=()=>{
    const[inputData,setInputData]=useState("");
    const list=useSelector((state)=>state.todoReducers.list);
    const dispatch=useDispatch();
   return(

             <div className="main-div">
    <div className="child-div">
      <h1>Your TODO LIST</h1>

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
                        <p className="item-line">{element.data}</p>
                        <div className="item-line">
                        <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=> dispatch(deleteTodo(element.id))}></i>
                        </div>
                  </div>
                 );
             })
         }

     </div>
    <div>
        <button 
        onClick={()=>dispatch(deleteAllTodo())}
        ><span>Delete All</span></button>
    </div>
    </div>
    </div>
   );
}

export default Todo;