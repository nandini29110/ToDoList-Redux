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
   <i  onClick={()=>dispatch(addTodo(inputData),setInputData("")) }>+</i>
     {/* <div>
         <h3>test</h3> */}
         {/* <i  title="Delete Item" onClick={()=>dispatch(deleteTodo(inputData),setInputData(""))}></i> */}

         {/* {
             list.map((element)=>{
                  <div key={element.id}>
                    <h3>{element.data}</h3>
                    <i title="Delete Item" onClick={()=> dispatch(deleteTodo(element.id),setInputData(""))}></i>
                  </div>
             })
         } */}

     {/* </div> */}
   </div>
    </div>
    </div>
   );
}

export default Todo;