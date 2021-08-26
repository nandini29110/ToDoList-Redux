import React,{useState} from "react";
import {useSelector,useDispatch} from "react-redux"; 
import {addTodo,deleteTodo,deleteAllTodo} from "../actions/index";
import TodoBucket from "./TodoBucket.js";
import listofTodo from "../listofTodo.js";

const OneTodo=()=>{
    // const[buck,setbuck]=useState(listofTodo);
    const[inputData,setInputData]=useState("");
    const list=useSelector((state)=>state.todoReducers.list);
    const listBucket=useSelector((state)=>state.todoReducers.listBucket);
    const dispatch=useDispatch();
    return(
        <>
   
    <div className="main-div">
    <div className="child-div">
      <h1 className="heading">Your TODO LIST</h1>

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
    </>
     );
}


export default OneTodo;
