import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import TaskList from "../components/TaskList";

function Completed() {
    const { tasks } = useContext(TaskContext);
    const completedTasks = tasks.filter(task => task.completed);
    return (
        <TaskList tasks={completedTasks} />
    )

} 

export default Completed;