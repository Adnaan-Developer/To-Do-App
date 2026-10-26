import logo from "/src/assets/logo.png";
import { Calendar, Clock, FolderOpen, House, SquareCheckBig } from "lucide-react";

const LeftContent = (props) => {
  return (
    <div className="fixed left-0 top-0 z-50 w-16 shrink-0 h-screen bg-pink-50 flex flex-col gap-15 items-center dark:bg-[#242829a3] dark:text-white">
      <div className="pb-20 pt-4">
        <img className="h-14 p-1" src={logo} alt="Logo" />
      </div>
      <button
        aria-label="Toggle home sidebar"
        onClick={() => props.setSidebarOpen(!props.sidebarOpen)}
      >
        <House />
      </button>
      <button onClick={() => props.setSidebarOpen(!props.sidebarOpen)}>
        <FolderOpen />
      </button>
      <button onClick={() => props.setSidebarOpen(!props.sidebarOpen)}>
        <SquareCheckBig />
      </button>
      <button onClick={() => props.setSidebarOpen(!props.sidebarOpen)}>
        <Clock />
      </button>
    </div>
  );
};

export default LeftContent;
