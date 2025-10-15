import React, { useEffect, useState } from "react";
import Board from "../components/Board";
import { CgClose } from "react-icons/cg";
const BASEURL = "http://localhost:3000/tasks";

const Dashboard = ({ isModalOpen, onCloseModal }) => {
  const statuses = ["todo", "inprogress", "done"];
  //state for displaying data
  const [allTasks, setAllTasks] = useState([]);
  //state to find if add or update
  const [isEditTask, setIsEditTask] = useState(false);
  //state to edit a task
  const [editingTask, setEditingTask] = useState(null);
  //get data from form useState
  const [taskData, setTaskData] = useState({
    taskname: "",
    desc: "",
    priority: "low",
    status: "todo",
  });
  //handle onchange event in input box
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    await handleNewTask(taskData);
    console.log(taskData);
  };

  //add new task
  const handleNewTask = async (taskData) => {
    try {
      const response = await fetch(BASEURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskData),
      });
      const newTask = await response.json();
      setAllTasks((prev) => [...prev, newTask]);
      alert("Task has been added!");
    } catch (err) {
      console.log("Task couldn't be added", err.message);
    }
  };
  //get all the task
  useEffect(() => {
    const getAllTasks = async () => {
      try {
        const response = await fetch(BASEURL);
        if (!response.ok) throw new Error("Failed!!");
        const data = await response.json();
        setAllTasks(data);
        console.log(data);
      } catch (err) {
        console.log("Getting tasks failed!!", err.message);
      }
    };
    getAllTasks();
  }, []);

  //delete task
  const handleDelete = async (id) => {
    try {
      await fetch(`${BASEURL}/${id}`, {
        method: "DELETE",
      });
      setAllTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.log("Delete unsuccessful", err.message);
    }
  };

  //update task
  const handleUpdate = async (id,updatedtask) => {
    try {
      const response = await fetch(`${BASEURL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedtask),
      });
      if (!response.ok) {
      const text = await response.text();
      throw new Error(`Update failed: ${text}`);
    }
      const data = await response.json();
      setAllTasks((prev) => prev.map((t) => (t.id === data.id ? data : t)));
    } catch (err) {
        console.log("Updating task:", updatedtask);
      console.log("Updation unsuccessful", err.message);
    }
  };
  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditTask) {
      await handleUpdate(editingTask.id,{ ...editingTask, ...taskData });
    } else {
      await handleNewTask(taskData);
    }

    //Reset data
    setTaskData({ taskname: "", desc: "", priority: "low", status: "todo" });
    setEditingTask(null);
    setIsEditTask(false);
    onCloseModal();
  };
  const handleEditClick= async(task)=>{
    setEditingTask(task);
    setIsEditTask(true);
    setTaskData(task);
  }
  return (
    <>
      <div>
        <Board
          title={
            statuses === "todo"
              ? "To-do"
              : statuses === "inprogress"
              ? "In-progress"
              : "Done"
          }
          tasks={allTasks}
          onDelete={handleDelete}
          onUpdate={handleEditClick}
          onStatusChange={handleUpdate}
        ></Board>
      </div>
      {(isModalOpen || isEditTask) && (
        <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="w-[50%] h-fit flex flex-col bg-pink rounded-md border border-brown font-chicle"
          >
            <button>
              <CgClose
                onClick={onCloseModal}
                className="place-self-end cursor-pointer hover:text-beige m-3 "
              />
            </button>
            <div className="p-1 px-5">{isEditTask? "Edit Task" :"New Task"} </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 p-6 w-full max-w-xl mx-auto">
              <label htmlFor="taskname" className="w-full sm:w-1/3">
                Task Name
              </label>
              <input
                type="text"
                name="taskname"
                value={taskData.taskname}
                onChange={handleChange}
                placeholder="Enter Task"
                className="border border-brown p-2 mb-2 w-full sm:w-2/3 rounded-md focus:outline-none focus:ring-2 focus:ring-brown"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 p-6 w-full max-w-xl mx-auto">
              <label htmlFor="description" className="w-full sm:w-1/3">
                Description
              </label>
              <input
                type="text"
                name="desc"
                value={taskData.desc}
                onChange={handleChange}
                placeholder="Add more details"
                className="border border-brown p-2 mb-2 w-full sm:w-2/3 rounded-md focus:outline-none focus:ring-2 focus:ring-brown"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 p-6 w-full max-w-xl mx-auto">
              <label htmlFor="taskname" className="w-full sm:w-1/3">
                Priority
              </label>
              <select
                onChange={handleChange}
                 value={taskData.priority}
                name="priority"
                className="border border-brown p-2 mb-2 w-full sm:w-2/3 rounded-md focus:outline-none focus:ring-2 focus:ring-brown"
              >
                <option value="">Select Priority</option>
                <option value="high">High</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 p-6 w-full max-w-xl mx-auto">
              <label htmlFor="taskname" className="w-full sm:w-1/3">
                Status
              </label>
              <select
                onChange={handleChange}
                 value={taskData.status}
                name="status"
                className="border border-brown p-2 mb-2 w-full sm:w-2/3 rounded-md focus:outline-none focus:ring-2 focus:ring-brown"
              >
                <option value="">Select Status</option>
                <option value="todo">To-do</option>
                <option value="inprogress">In-Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
            <div className="flex items-center gap-4 p-6 mx-auto">
               <button type= "submit" className="button cursor-pointer" >
               {isEditTask? "Edit Task" :"Add Task"}  
              </button>
              
              
              <button className="button cursor-pointer" onClick={onCloseModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Dashboard;
