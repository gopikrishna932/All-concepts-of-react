import TaskItem from "./Taskitem";
const TaskList=(props)=>{
    return (
        <ul>
            <TaskItem dsv={props.taskData}/>
        </ul>
    )
}
export default TaskList;