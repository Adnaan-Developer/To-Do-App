import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import TaskModal from "./TaskModal";

const TaskCard = ({ task, onDelete, onToggleComplete, onUpdateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleUpdate = (updatedData) => {
    onUpdateTask(task.id, updatedData);
    setIsEditing(false);
  };
  return (
    <div className="text-lg md:text-xl h-auto border-2 w-auto rounded-2xl p-6 mb-6 dark:bg-transparent bg-[#ef2d57bb]">
      <div className="flex items-center justify-between mb-4 gap-2">
        <p className={task.completed ? "dark:text-gray-400 line-through" : ""}>
          {task.title}
        </p>
        <input
          className="h-5 w-5"
          type="checkbox"
          checked={task.completed || false}
          onChange={() => onToggleComplete(task.id)}
        />
      </div>
      <p className="dark:text-gray-400 text-white">{task.desc}</p>
      <div className="flex justify-between items-center gap-2">
        <p className="text-sm py-2">{task.date}</p>
        <div className="flex gap-4">
          <button
            className="text-blue-500 hover:text-blue-800"
            onClick={() => setIsEditing(true)}
            aria-label={`Edit ${task.title}`}
          >
            <Pencil />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            aria-label={`Delete ${task.title}`}
            className="text-red-600 cursor-pointer hover:text-red-800"
          >
            <Trash />
          </button>
        </div>
      </div>
      {isEditing && (
        <TaskModal
          key={task.id}
          task={task}
          onClose={() => setIsEditing(false)}
          onAddTask={handleUpdate}
        />
      )}
    </div>
  );
};

export default TaskCard;
