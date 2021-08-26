import React, {useState}from "react";
import "./TodoBucket.css";
const TodoBucket = (props)=>{
    const bucketItems=props.bucketItems;
    return(
       <div>        
           <h1>{props.bucketTitle}</h1>
           {bucketItems.map((idvitem)=>(
            <p>{idvitem}</p>
           ))}
       </div>
   )
}

export default TodoBucket;