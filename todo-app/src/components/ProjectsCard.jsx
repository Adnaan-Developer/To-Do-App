import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import Model from "./Model";

const ProjectsCard = ({
  project,
  onDelete,
  onToggleCompleteProject,
  onUpdateProject,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleUpdate = (updatedData) => {
    onUpdateProject(project.id, updatedData);
    setIsEditing(false);
  };

  return (
    <div className="bg-[#363537] text-white dark:bg-[#242829] mb-6 rounded-2xl p-6">
      <div className="flex justify-between items-center">
        <div className="font-medium mb-4 text-xl">
          <h2 className={project.completed ? "text-gray-400 line-through" : ""}>
            {project.title}
          </h2>
          <p className="text-gray-500 text-sm">Due Date: {project.date}</p>
        </div>
        <input
          className="h-5 w-5 ml-2"
          type="checkbox"
          checked={project.completed || false}
          onChange={() => onToggleCompleteProject?.(project.id)}
        />
      </div>
      <p className="wrap-break-word text-lg">{project.desc}</p>
      <div className="pt-2 flex justify-between items-center">
        <p className=" text-gray-500 font-bold">{project.prior}</p>
        <div className="flex gap-4">
          <button
            className="cursor-pointer text-blue-500 hover:text-blue-800"
            onClick={() => setIsEditing(true)}
            aria-label={`Edit ${project.title}`}
          >
            <Pencil />
          </button>
          <button
            onClick={() => onDelete(project.id)}
            aria-label={`Delete ${project.title}`}
            className="text-red-600 hover:text-red-800 cursor-pointer"
          >
            <Trash />
          </button>
        </div>
      </div>
      {isEditing && (
        <Model
          key={project.id}
          project={project}
          onClose={() => setIsEditing(false)}
          onAddProject={handleUpdate}
        />
      )}
    </div>
  );
};

export default ProjectsCard;
