import { CirclePlus, Plus } from "lucide-react";
import ProjectsCard from "./ProjectsCard";
import TaskCard from "./TaskCard";
import Model from "./Model";
import TaskModal from "./TaskModal";
import { NavLink } from "react-router-dom";

const RightContent = ({
  addProject,
  deleteProject,
  addTask,
  deleteTask,
  project,
  task,
  toggleComplete,
  toggleCompleteProject,
  tasksInProgress,
  finishedTasks,
  isTaskModalOpen,
  ismodalOpen,
  setIsModalOpen,
  setIsTaskModalOpen,
  updateProject,
  updateTask,
}) => {
  const recentProject = [...project]
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 2);

  const recentTask = [...task]
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 2);

  return (
    <div className="ml-16 min-w-0 flex-1 h-full">
      <div className="relative h-45 m-3 md:h-55 md:m-5 rounded-2xl border-2 overflow-hidden flex-wrap">
        <img
          className="absolute inset-0 h-full w-full object-cover "
          src="https://images.unsplash.com/photo-1674958058549-e6ef631869ba?q=80&w=1647&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          alt="Dashboard banner"
        />
        <div className="absolute flex flex-col items-start inset-0 p-5 md:p-8">
          <h3 className="md:text-2xl text-lg text-white">
            Welcome back to your
          </h3>
          <h2 className="font-bold text-2xl md:text-4xl text-white">
            Daily task manager
          </h2>
          <NavLink
            to="/projectandTask/tasks"
            className="bg-white text-black py-2 px-6 md:px-10 mt-6 rounded-xl md:text-xl text-base"
          >
            Start tracking
          </NavLink>
        </div>
      </div>
      <div className="flex gap-10 mx-10 justify-between items-center text-center text-xl">
        <div>
          <h2 className="text-gray-500">Tasks in progress</h2>
          <p>{tasksInProgress}</p>
        </div>
        <div>
          <h2 className="text-gray-500">Finished tasks</h2>
          <p>{finishedTasks}</p>
        </div>
      </div>
      <div className="my-6 block md:flex mx-5 md:justify-center md:items-center gap-10">
        <div className="p-4 md:mb-0 mb-10">
          <h1 className="text-2xl font-bold mb-8">Recent Projects</h1>
          <div className="gap-5 grid grid-cols-1 xl:grid-cols-2 md:mx-5">
            {recentProject.length === 0 ? (
              <p className="font-bold text-4xl my-10">
                No project added yet 🤔
              </p>
            ) : (
              recentProject.map((project) => (
                <ProjectsCard
                  key={project.id}
                  project={project}
                  onDelete={deleteProject}
                  onToggleCompleteProject={toggleCompleteProject}
                  onUpdateProject={updateProject}
                />
              ))
            )}
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex mt-6 gap-2 border-dotted border-2 py-2 w-full justify-center items-center rounded cursor-pointer"
          >
            <CirclePlus /> Add a new project
          </button>
        </div>
        <div className="md:pb-0 pb-10">
          <h1 className="text-2xl font-bold mb-8">
            Daily Tasks ({task.length})
          </h1>
          <div className="gap-5 grid grid-cols-1 xl:grid-cols-2 my-8 mx-3 md:mx-5">
            {recentTask.length === 0 ? (
              <p className="font-bold text-4xl my-10">No Task added yet 😋</p>
            ) : (
              recentTask.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onDelete={deleteTask}
                  onToggleComplete={toggleComplete}
                  onUpdateTask={updateTask}
                />
              ))
            )}
          </div>
          <button
            onClick={() => setIsTaskModalOpen(true)}
            className="flex mt-6 gap-2 border-dotted border-2 py-2 w-full justify-center items-center rounded cursor-pointer"
          >
            <Plus /> Add a new task
          </button>
        </div>
      </div>

      {ismodalOpen && (
        <Model
          onClose={() => setIsModalOpen(false)}
          onAddProject={addProject}
        />
      )}

      {isTaskModalOpen && (
        <TaskModal
          onClose={() => setIsTaskModalOpen(false)}
          onAddTask={addTask}
        />
      )}
    </div>
  );
};

export default RightContent;
