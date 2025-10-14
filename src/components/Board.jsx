import React from "react";
import { GiSandsOfTime } from "react-icons/gi";
import { AiOutlineFileDone } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import TaskCard from "./TaskCard";
const Board = ({ tasks,onDelete,onUpdate }) => {
  const boards = [
    { id: 1, title: "To-do", icon: <TbListDetails /> },
    { id: 2, title: "In-Progress", icon: <GiSandsOfTime /> },
    { id: 3, title: "Done", icon: <AiOutlineFileDone /> },
  ];

  return (
    <div className="container">
      <div className="flex items-center justify-evenly">
        {boards.map((board, id) => {
            const boardTasks = tasks.filter(task => task.status === board.title.toLowerCase().replace("-", ""));
          return (
            <div className="font-chicle text-brown text-xl mt-10" key={id}>
                <div className="flex items-center gap-4">
                    <h1>{board.title}</h1>
                    <p>{board.icon}</p>
                </div>
                {boardTasks.length > 0?(
                    boardTasks.map((task,index)=>(
                        <TaskCard task={task} onDelete={onDelete} onUpdate={onUpdate}></TaskCard>
                    ))) :(
                        <p>No task available</p>
                    )

                }
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
