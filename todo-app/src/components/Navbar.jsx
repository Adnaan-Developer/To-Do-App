import { ChevronDown } from "lucide-react";
import profileImg from '../assets/Profile-img.png'

const Navbar = () => {
  function dateFormatText() {
    const today = new Date();

    const formattedDate = today.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });

    return (
      <h2 className="font-bold text-lg md:text-xl">Today, {formattedDate}</h2>
    );
  }

  return (
    <div className="ml-16 py-5 px-5 flex items-center justify-between">
      <div className="mx-2">{dateFormatText()}</div>
      <div className="flex gap-4 items-center">
        <img
          className="h-10 w-10 object-cover rounded-full"
          src={profileImg}
          alt=""
        />
        <div className="md:flex flex-col font-semibold hidden text-gray-500">
          <p>Adnaan </p>
          <span className="text-xs">Frontend Developer</span>
        </div>
        <div className="bg-pink-100 md:flex hidden dark:bg-gray-800 dark:text-white rounded-full p-1">
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
