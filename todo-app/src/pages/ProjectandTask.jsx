import { NavLink, Outlet } from "react-router-dom";

const ProjectandTask = (props) => {
  return (
    <div className="ml-16 min-h-screen dark:bg-[#181a1b] p-6 dark:text-white">
      <h1 className="mb-6 text-3xl md:text-4xl font-bold">Projects & Tasks</h1>
      <div className="flex justify-between items-center md:mx-60 mx-10 mb-6">
        <NavLink
          to="/projectandTask/projects"
          className={({ isActive }) =>
            `pb-2 ${isActive ? "border-b-2 border-blue-500 text-blue-400 text-2xl" : "dark:text-gray-200 dark:hover:text-white text-xl"}`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/projectandTask/tasks"
          className={({ isActive }) =>
            `pb-2 ${isActive ? "border-b-2 border-blue-500 text-blue-400 text-2xl" : "dark:text-gray-200 dark:hover:text-white text-xl"}`
          }
        >
          Tasks
        </NavLink>
      </div>
      <Outlet context={{ props }} />
    </div>
  );
};

export default ProjectandTask;
