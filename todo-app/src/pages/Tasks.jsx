import { Plus } from "lucide-react";
import TaskCard from "../components/TaskCard";
import TaskModal from "../components/TaskModal";

const Tasks = ({
  task,
  toggleComplete,
  deleteTask,
  tasksInProgress,
  finishedTasks,
  isTaskModalOpen,
  setIsTaskModalOpen,
  addTask,
  updateTask,
}) => {
  return (
    <div>
      <div className="gap-10 md:mx-10 my-10 text-center text-xl">
        <div>
          <div>
            <button
              onClick={() => setIsTaskModalOpen(true)}
              className="flex mt-6 gap-2 border-dotted border-2 py-2 w-full justify-center items-center rounded cursor-pointer"
            >
              <Plus /> Add a new task
            </button>
          </div>
          <div className="flex gap-10 mx-10 my-10 justify-between items-center">
            <div>
              <h2 className="text-gray-500">Tasks in progress</h2>
              <p>{tasksInProgress}</p>
            </div>
            <div>
              <h2 className="text-gray-500">Finished tasks</h2>
              <p>{finishedTasks}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-3 p-4">
        {task.length === 0 ? (
          <p className="text-xl text-gray-400">No task added yet !</p>
        ) : (
          task.map((item) => (
            <TaskCard
              key={item.id}
              task={item}
              onToggleComplete={toggleComplete}
              onDelete={deleteTask}
              onUpdateTask={updateTask}
            />
          ))
        )}
      </div>
      {isTaskModalOpen && (
        <TaskModal
          onClose={() => setIsTaskModalOpen(false)}
          onAddTask={addTask}
        />
      )}
    </div>
  );
};

export default Tasks;
