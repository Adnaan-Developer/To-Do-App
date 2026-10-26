import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const CenterElements = ({ place, path }) => {
  return (
    <div>
      <NavLink
        to={path}
        end={path === "/"}
        className={({ isActive }) =>
          `my-2 flex items-center justify-between rounded-xl p-3 transition ${isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-pink-100 dark:text-white dark:hover:bg-[#303638]"}`
        }
      >
        <span className="font-medium text-xl my-2.5 cursor-pointer">
          {place}
        </span>
        <ChevronRight />
      </NavLink>
    </div>
  );
};

export default CenterElements;
