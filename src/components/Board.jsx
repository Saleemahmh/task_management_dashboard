import React from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { GiSandsOfTime } from "react-icons/gi";
import { AiOutlineFileDone } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import TaskCard from "./TaskCard";
const Board = ({ tasks, onDelete, onUpdate, onStatusChange }) => {
  const boards = [
    { id: 1, title: "To-do", icon: <TbListDetails /> },
    { id: 2, title: "In-Progress", icon: <GiSandsOfTime /> },
    { id: 3, title: "Done", icon: <AiOutlineFileDone /> },
  ];
//handle drag and drop
const handleDrag=(result)=>{
    if(!result.destination) return;
    const{source,destination,draggableId} = result;
    if(source.droppableId === destination.droppableId) return;
    const movedTask = tasks.find((t)=>t.id === draggableId);

    const updatedTask = {
        ...movedTask,
        status:destination.droppableId,
    };
    onUpdate(updatedTask);
}
  return (
    <div className="container">
      <div className="flex flex-wrap gap-4 justify-center min-h-screen sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        {boards.map((board, id) => {
          const boardTasks = tasks.filter(
            (task) => task.status === board.title.toLowerCase().replace("-", "")
          );
          return (
            <div
              className="font-chicle text-brown text-xl mt-10 overflow-x-auto"
              key={board.id}
            >
              <div
                className="w-64 sm:w-72 md:w-80 flex gap-4 "
              >
                <h1>{board.title}</h1>
                <p>{board.icon}</p>
              </div>
              {boardTasks.length > 0 ? (
                boardTasks.map((task, index) => (
                    <div className="flex-1 overflow-y-auto mt-4 ">
                  <TaskCard
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onUpdate={() => onUpdate(task)}
                    onStatusChange={(updatedtask) =>
                      onStatusChange(updatedtask.id, updatedtask)
                    }
                  ></TaskCard>
                  </div>
                ))
              ) : (
                <p>No task available</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
