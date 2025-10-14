import React from 'react'

const TaskCard = ({task,onDelete,onUpdate}) => {
 const priorityColor =
    task.priority === "high"
      ? "text-red-600 bg-red-100"
      : task.priority === "medium"
      ? "text-yellow-600 bg-yellow-100"
      : "text-green-600 bg-green-100";

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-3 border border-gray-200">
      <h3 className="font-semibold text-gray-800 cursor-pointer" onClick={()=> onUpdate(task.id)}>{task.taskname}</h3>
      <p className="text-sm text-gray-600 mb-1">{task.desc}</p>
      <p className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${priorityColor}`}>
        Priority: {task.priority}
      </p>
      <div className="flex justify-end mt-2">
        <button
          onClick={()=> onDelete(task.id)}
          className="text-red-500 text-sm hover:underline"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default TaskCard