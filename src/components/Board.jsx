import React from "react";
import { GiSandsOfTime } from "react-icons/gi";
import { AiOutlineFileDone } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
const Board = () => {
  const boards = [
    { id: 1, title: "To-do", icon: <TbListDetails /> },
    { id: 2, title: "In-Progess", icon: <GiSandsOfTime /> },
    { id: 3, title: "Done", icon: <AiOutlineFileDone /> },
  ];

  return (
    <div className="container">
      <div className="flex items-center justify-evenly">
        {boards.map((item, id) => {
          return (
            <div className="font-chicle text-brown text-xl mt-10" key={id}>
                <div className="flex items-center gap-4">
                    <h1>{item.title}</h1>
                    <p>{item.icon}</p>
                </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
