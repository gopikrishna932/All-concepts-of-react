import {  useState  } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
const TASK_ARRAY = ["ReactJs","Node Js","Java"]
function App(){
  const [taskArray,setTaskArray]=useState(TASK_ARRAY)
  let someData="875"
  //call back function
  const addDataToTask=(task)=>{
    console.log(task,"from app")
    setTaskArray(task)
  }
  return (
    <div className="App">
      <AddTask data={someData} getData={addDataToTask}/>
      <TaskList taskData={taskArray}/>
    </div>
  );
}

export default App;
