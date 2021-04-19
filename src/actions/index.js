export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    payload: task,     
  }
};

export const markTaskAsDone = (task) => {
  return {
    type: 'MARK_TASK_AS_DONE',
    payload: task,  
  }  
}

export const removeTask = (task) => {
    return {
      type: 'REMOVE_TASK',
      payload: task,  
    }  
}