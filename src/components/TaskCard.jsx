import React from 'react'
import { IoTrashOutline } from "react-icons/io5";
import { LiaEdit } from "react-icons/lia";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const TaskCard = ({task,onDelete,onUpdate,onStatusChange}) => {
 const handleStatusChange =()=>{
    let nextStatus;
    if(task.status === "todo") nextStatus="inprogress";
    else if (task.status === "inprogress") nextStatus = "done";
    else return ;

    onStatusChange({...task,status:nextStatus})
 }
 const priorityColor =
    task.priority === "high"
      ? "text-red-600 bg-red-100"
      : task.priority === "medium"
      ? "text-yellow-600 bg-yellow-100"
      : "text-green-600 bg-green-100";

  return (
    <div className="  bg-pink p-4 rounded-lg mb-3 border border-brown boxshadow">
      <h3 className="font-semibold text-brown">{task.taskname}</h3>
      <p className="text-sm text-brown mb-1">{task.desc}</p>
      <p className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${priorityColor}`}>
        Priority: {task.priority}
      </p>
      <div className="flex items-center justify-evenly mt-2">
        <button
          onClick={()=> onDelete(task.id)}
          className="text-brown text-sm hover:text-beige"
        >
          <IoTrashOutline></IoTrashOutline>
        </button>
        <button
          onClick={onUpdate}
          className="text-brown text-sm hover:text-beige"
        >
          <LiaEdit></LiaEdit>
        </button>
        <button
          onClick={handleStatusChange}
          className="text-brown text-sm hover:text-beige"
        >
          <FaArrowRightArrowLeft></FaArrowRightArrowLeft>
        </button>
      </div>
    </div>
  );
}

export default TaskCard