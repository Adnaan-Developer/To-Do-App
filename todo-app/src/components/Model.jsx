import { PlusCircle, X } from "lucide-react";
import { useState } from "react";

const Model = ({ onClose, onAddProject, project }) => {
  const [date, setDate] = useState(project?.date || "");
  const [title, setTitle] = useState(project?.title || "");
  const [desc, setDesc] = useState(project?.desc || "");
  const [prior, setPrior] = useState(project?.prior || "");
  const isEditing = Boolean(project);

  const submitHandling = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a project title");
      return;
    }

    if (!desc.trim()) {
      alert("Please enter a project description");
      return;
    }

    if (!prior) {
      alert("Please select a priority");
      return;
    }

    if (!date) {
      alert("Please select a date");
      return;
    }

    const updatedProject = {
      title: title.trim(),
      desc: desc.trim(),
      date,
      prior,
    };

    onAddProject(updatedProject);

    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="flex fixed inset-0 z-50 items-center justify-center bg-black/80 p-4"
    >
      <form onSubmit={submitHandling}>
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-80 md:w-auto flex-wrap text-white flex flex-col gap-6 border-2 p-6 md:p-10 rounded-2xl"
        >
          <h2 className="flex justify-between items-center text-2xl md:text-4xl font-bold md:mb-4">
            {isEditing ? "Edit Project" : "Add Project"}
            <button className="cursor-pointer" type="button" onClick={onClose}>
              <X />
            </button>
          </h2>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="outline-none border-2 p-4 rounded-xl md:w-100 md:h-20 md:text-2xl text-xl w-65"
            type="text"
            placeholder="Enter project title..."
          />
          <textarea
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="outline-none border-2 p-4 rounded-xl md:w-100 md:h-40 md:text-2xl text-xl w-65 h-30"
            placeholder="Write description...."
          ></textarea>
          <div className="flex flex-col gap-2 md:w-100 w-65 bg-transparent  text-white">
            <label htmlFor="priority" className="text-lg block font-medium">
              Choose Priority Level
            </label>
            <select
              value={prior}
              onChange={(e) => {
                setPrior(e.target.value);
              }}
              className="outline-none border-2 p-3 dark:bg-black rounded-xl md:h-15 md:text-2xl text-xl w-full  cursor-pointer"
              name="priority"
              id="priority"
            >
              <option className="dark:text-white text-black" value="">
                Select Priority
              </option>
              <option className="dark:text-white text-black" value="Normal">
                Normal
              </option>
              <option className="dark:text-white text-black" value="Important">
                Important
              </option>
              <option className="dark:text-white text-black" value="Low">
                Low
              </option>
            </select>
          </div>
          <div className="md:w-100 w-65 gap-2 flex flex-col">
            <label htmlFor="due-date" className="text-lg block font-medium">
              Enter Due Date here :
            </label>
            <input
              id="due-date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="outline-none border-2 p-4 rounded-xl md:text-2xl text-xl w-full h-full bg-transparent text-white [&::-webkit-datetime-edit]:uppercase [&::-webkit-calendar-picker-indicator]:invert"
              type="date"
            />
          </div>
          <button
            type="submit"
            className="font-semibold text-xl md:text-2xl bg-black text-white dark:bg-white dark:text-black rounded-xl p-4 flex items-center gap-2 justify-center border"
          >
            <PlusCircle /> {isEditing ? "Save Changes" : "Add Project"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Model;
