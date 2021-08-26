import React,{useState} from "react";
import {useSelector,useDispatch} from "react-redux"; 
import {addTodo,deleteTodo,deleteAllTodo} from "../actions/index";
import "./todo.css";
import OneTodo from "./OneTodo.js";

const Todo=()=>{
    const dispatch=useDispatch();
    const [newBucketTitle,setNewBucketTitle]=useState("");
    const handelCreateNewBucket=()=>{
        console.log("New BUcket with Title "+newBucketTitle);
        setNewBucketTitle("");
    }
   return(
    
    <>
     <p>What To Create New Bucket?</p>
     <input placeholder="Add Title of New BUcket" value={newBucketTitle} onChange={(event)=>{setNewBucketTitle(event.target.value)}}></input>
     <button  className="create-bucket-btn" onClick={handelCreateNewBucket}><span>CREATE A NEW BUCKET</span></button>
         {/* {buck.map((buckElements)=>(
             <TodoBucket bucketTitle={buckElements.title}
                 bucketItems={buckElements.items}/>
         ))} */}

       {/* {  buck.map((buckone)=>{
          <TodoBucket 
                 bucketTitle={listofTodo[0].title}
                 bucketItems={listofTodo[0].items}    
           />
       })
       } */}

         {/* <TodoBucket 
         bucketTitle={listofTodo[0].title}
         bucketItems={listofTodo[0].items}    
         /> */}
    <OneTodo/>
    </>
   );
}

export default Todo;