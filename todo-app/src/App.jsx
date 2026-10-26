import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProjectandTask from "./pages/ProjectandTask";
import Stopwatch from "./pages/Stopwatch";
import Tasks from "./pages/Tasks";
import Projects from "./pages/Projects";
import LeftContent from "./components/LeftContent";
import CenterContent from "./components/CenterContent";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "system";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const isDark =
        theme === "dark" || (theme === "system" && mediaQuery.matches);

      document.documentElement.classList.toggle("dark", isDark);
    };

    applyTheme();

    mediaQuery.addEventListener("change", applyTheme);
    return () => {
      mediaQuery.removeEventListener("change", applyTheme);
    };
  }, [theme]);

  const [project, setProject] = useState(() => {
    const savedProject = localStorage.getItem("project");
    return savedProject ? JSON.parse(savedProject) : [];
  });
  const [task, setTask] = useState(() => {
    const savedTasks = localStorage.getItem("task");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
    localStorage.setItem("project", JSON.stringify(project));
  }, [task, project]);

  const addProject = (newProject) => {
    const timeStamp = Date.now();
    setProject((prevProject) => [
      ...prevProject,
      {
        id: timeStamp,
        ...newProject,
        createdAt: timeStamp,
      },
    ]);
  };

  const addTask = (newTask) => {
    const timeStamp = Date.now();
    setTask((prevTask) => [
      ...prevTask,
      {
        id: timeStamp,
        ...newTask,
        createdAt: timeStamp,
      },
    ]);
  };

  const deleteProject = (id) => {
    setProject((prevProject) =>
      prevProject.filter((project) => project.id !== id),
    );
  };

  const deleteTask = (id) => {
    setTask((prevTask) => prevTask.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTask((prevTask) =>
      prevTask.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const toggleCompleteProject = (id) => {
    setProject((prevProject) =>
      prevProject.map((project) =>
        project.id === id
          ? { ...project, completed: !project.completed }
          : project,
      ),
    );
  };

  const finishedTasks = task.filter((task) => task.completed).length;
  const tasksInProgress = task.filter((task) => !task.completed).length;
  const finishedProject = project.filter((project) => project.completed).length;
  const projectInProgress = project.filter(
    (project) => !project.completed,
  ).length;

  const [ismodalOpen, setIsModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const updateProject = (id, updatedData) => {
    setProject((prevProject) =>
      prevProject.map((project) =>
        project.id === id ? { ...project, ...updatedData } : project,
      ),
    );
  };

  const updateTask = (id, updatedData) => {
    setTask((prevTask) =>
      prevTask.map((task) =>
        task.id === id ? { ...task, ...updatedData } : task,
      ),
    );
  };

  const sharedData = {
    task,
    project,
    setProject,
    setTask,
    deleteProject,
    deleteTask,
    addProject,
    addTask,
    toggleComplete,
    toggleCompleteProject,
    finishedTasks,
    tasksInProgress,
    finishedProject,
    projectInProgress,
    isTaskModalOpen,
    ismodalOpen,
    setIsModalOpen,
    setIsTaskModalOpen,
    updateProject,
    updateTask,
  };

  return (
    <div className="flex dark:bg-[#181a1b] dark:text-white min-h-screen w-full overflow-x-hidden bg-white text-black ">
      <LeftContent
        theme={theme}
        setTheme={setTheme}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <CenterContent
        theme={theme}
        setTheme={setTheme}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <main className="min-w-0 flex-1">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home {...sharedData} />} />
          <Route
            path="/projectandtask"
            element={<ProjectandTask {...sharedData} />}
          >
            <Route index element={<Projects {...sharedData} />} />
            <Route path="projects" element={<Projects {...sharedData} />} />
            <Route path="tasks" element={<Tasks {...sharedData} />} />
          </Route>
          <Route path="/stopwatch" element={<Stopwatch />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
