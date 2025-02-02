
import {useState} from "react";



const AddTask=(props)=>{
    console.log(props.data,"from add task")
    const[task,setTask]=useState('')

    
    
const handleButtonClick=(e)=>{
    e.preventDefault();
    props.getData(task)


}
const handleInputChange=(e)=>{
    console.log(e.target.value);
    setTask(e.target.value)


}
    return (
        <form>
            <input
              type="text"
              placeholder="Add a new task"
              onChange={handleInputChange}
              value={task}
            
            />
            
            <button onClick={handleButtonClick}>Add Task</button>
            <h1>{task}</h1>
        </form>
    )

}
export default AddTask;