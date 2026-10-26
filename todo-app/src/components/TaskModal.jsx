import { PlusCircle, X } from "lucide-react";
import { useState } from "react";

const TaskModal = ({ onClose, onAddTask, task }) => {
  const [title, setTitle] = useState(task?.title || "");
  const [date, setDate] = useState(task?.date || "");
  const [desc, setDesc] = useState(task?.desc || "");
  const isEditing = Boolean(task)

  const submitHandling = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter the title!");
      return;
    }

    if (!desc.trim()) {
      alert("Please enter the description !");
      return;
    }

    if (!date) {
      alert("Please enter the description !");
      return;
    }

    const updatedTask = {
      title: title.trim(),
      desc: desc.trim(),
      date,
    };

    onAddTask(updatedTask);

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
            {isEditing ? "Edit Task" : "Add Task"}
            <button className="cursor-pointer" onClick={onClose}>
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
            placeholder="Enter task title..."
          />
          <textarea
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="outline-none border-2 p-4 rounded-xl md:w-100 md:h-40 md:text-2xl text-xl w-65 h-30"
            placeholder="Write description...."
          ></textarea>
          <input
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            className="outline-none border-2 p-4 rounded-xl md:w-100 md:h-20 md:text-2xl text-xl w-65 [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-datetime-edit]:uppercase "
            type="date"
          />
          <button type="submit" className="font-semibold text-xl md:text-2xl bg-black text-white dark:bg-white dark:text-black rounded-xl p-4 flex items-center gap-2 justify-center border">
            <PlusCircle /> {isEditing ? "Save changes" : "Add Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskModal;
