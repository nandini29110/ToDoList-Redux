export const addTodo= (id,data,title) => { 
    return {
      type: "ADD_TODO",
      payload:{
          id: new Date().getTime().toString() , 
          data: data
      }
    }
  }
  export const addTitle= (title) => { 
    return {
      type: "ADD_TITLE", 
      title,
    }
  }
  
  export const deleteTodo= (id) => {
    return {
      type: "DELETE_TODO",
      id
    }
  }
  
  export const deleteAllTodo= () => {
    return {
      type: "DELETE_ALL_TODO"
    }
  }


  