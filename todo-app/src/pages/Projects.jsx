import { CirclePlus } from "lucide-react";
import ProjectsCard from "../components/ProjectsCard";
import Model from "../components/Model";

const Projects = ({
  project,
  deleteProject,
  toggleCompleteProject,
  finishedProject,
  projectInProgress,
  ismodalOpen,
  setIsModalOpen,
  addProject,
  updateProject
}) => {
  return (
    <div className="md:mx-10 my-15">
      <div>
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex mt-6 gap-2 border-dotted border-2 py-2 w-full justify-center items-center rounded cursor-pointer"
          >
            <CirclePlus /> Add a new project
          </button>
        </div>
        <div className="flex gap-10 my-10 justify-between items-center text-center text-xl">
          <div>
            <h2 className="text-gray-500">Project in progress</h2>
            <p>{projectInProgress}</p>
          </div>
          <div>
            <h2 className="text-gray-500">Finished project</h2>
            <p>{finishedProject}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {project.length === 0 ? (
          <p className="text-xl text-gray-400">No project added yet !</p>
        ) : (
          project.map((item) => (
            <ProjectsCard
              key={item.id}
              project={item}
              onDelete={deleteProject}
              onToggleCompleteProject={toggleCompleteProject}
              onUpdateProject={updateProject}
            />
          ))
        )}
      </div>
      {ismodalOpen && (
        <Model
          onClose={() => setIsModalOpen(false)}
          onAddProject={addProject}
        />
      )}
    </div>
  );
};

export default Projects;
