const initialState = {
    tasks: [
      {name: "eat", status: "pending"},
      {name: "code", status: "pending"},
      {name: "sleep", status: "done"}
    ],
};


const reducer = (state = initialState, action) => {
  if (action.type === 'ADD_TASK') {
    let newState = {...state};
    newState.tasks = [...newState.tasks, action.payload];
    
    return (newState);
  }
  else if(action.type === 'MARK_TASK_AS_DONE') { 
    let indexOfSelected;
    let newState = {...state}; 

    for(let i = 0; i < newState.tasks.length; ++i) {
      if(newState.tasks[i].name === action.payload){
        indexOfSelected = i;
        break;
      }    
    }

    newState = {
      ...state,
      tasks: newState.tasks.map((task, index) => {
        return (index === indexOfSelected ? {...task, status: 'done'} : task);
      })
    }; 

    console.log(newState);

    return (newState);
  }
  else if (action.type === 'REMOVE_TASK') {
    let newState = {...state};

    // let indexOfItemtoRemove;
    // for(let i = 0; i < newState.tasks.length; ++i) {
    //   if(newState.tasks[i].name === action.payload){
    //     indexOfItemtoRemove = i;
    //     break;
    //   }    
    // }

    newState.tasks = newState.tasks.filter((task) => {
      return task.name !== action.payload;        
    });

    // console.log(indexOfItemtoRemove);

    // newState.tasks = newState.tasks.splice(1, 1);
    //can't get splice to work as intended for deleting elements

    return (newState);
  }

  return state;
}

export default reducer;