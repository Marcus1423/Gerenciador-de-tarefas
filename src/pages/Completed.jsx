import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import TaskList from "../components/TaskList";

function Completed() {
    const { tasks } = useContext(TaskContext);
    const completedTasks = tasks.filter(task => task.completed);
    return (
        <>
            <h1 className="text-3xl text-center p-2.5">Tarefas concluídas</h1>
            <TaskList tasks={completedTasks} />
        </>
        
    )

} 

export default Completed;