import React from "react";
import { RiGitRepositoryFill } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className="container flex justify-between items-center bg-beige font-chicle text-brown">
      <div className="flex items-center gap-1 lg:text-3xl text-2xl py-6">
        <RiGitRepositoryFill></RiGitRepositoryFill>
        <h1>My Tasks</h1>
      </div>
      <ul className="flex justify-end items-center p-5 gap-4 lg:text-xl">
        <li>
          <button className="button">Logout</button>
        </li>
        <li>
          <button className="button">Add Task</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
