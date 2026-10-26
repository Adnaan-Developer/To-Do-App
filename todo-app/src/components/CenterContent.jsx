import { Monitor, Moon, Search, SunMedium } from "lucide-react";
import CenterElements from "./CenterElements";

const CenterContent = (props) => {
  function themeChangingLight() {
    props.setTheme("light");
  }

  function themeChangingDark() {
    props.setTheme("dark");
  }

  function themeChangingSystem() {
    props.setTheme("system");
  }

  const name = [
    {
      placeName: "Home",
      path: "/",
    },
    {
      placeName: "Projects",
      path: "/projectandtask/projects",
    },
    {
      placeName: "Tasks",
      path: "/projectandtask/tasks",
    },
    {
      placeName: "StopWatch",
      path: "/stopwatch",
    },
  ];

  return (
    <div
      className={`z-40 left-16 shrink-0 overflow-x-hidden overflow-y-auto transition-all duration-300 ${props.sidebarOpen ? "fixed left-0 top-0 flex h-screen w-[min(80vw, 280px)] p-5 md:relative md-left-auto md:w-87.5 md:p-8" : "hidden md:flex md:h-screen md:w-0 md:p-0"}  bg-pink-50 min-h-screen text-black dark:bg-[#242829] dark:text-white flex-col`}
    >
      <h2 className="font-bold text-4xl pb-10">Todos App</h2>
      <div className="border-2 mb-10 p-2 rounded-2xl border-pink-200 dark:border-[#3c4245] flex gap-2">
        <Search />
        <input
          className="outline-none bg-transparent text-black dark:text-white placeholder:font-semibold placeholder:text-gray-500 dark:placeholder:text-gray-400"
          type="text"
          placeholder="Searching for..."
        />
      </div>
      <div>
        {name.map(function (elem, idx) {
          return (
            <div key={idx}>
              <CenterElements place={elem.placeName} path={elem.path} />
            </div>
          );
        })}
      </div>
      <div className="flex mx-auto mt-auto gap-8 border-2 border-gray-900 dark:border-gray-200 rounded-full items-center justify-center py-2 w-50">
        <button
          className="cursor-pointer"
          aria-label="Use system theme"
          onClick={themeChangingSystem}
        >
          <Monitor />
        </button>
        <button
          className="cursor-pointer"
          aria-label="Use light theme"
          onClick={themeChangingLight}
        >
          <SunMedium />
        </button>
        <button
          className="cursor-pointer"
          aria-label="Use dark theme"
          onClick={themeChangingDark}
        >
          <Moon />
        </button>
      </div>
    </div>
  );
};

export default CenterContent;
