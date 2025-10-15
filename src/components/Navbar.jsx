import React from "react";
import { RiGitRepositoryFill } from "react-icons/ri";
import { LuBadgePlus } from "react-icons/lu";
import { TbLogout } from "react-icons/tb";
const Navbar = ( {onOpenModal}) => {
  return (
    <div className="flex justify-between items-center bg-brown font-chicle text-pink">
      <div className="flex items-center m-4 gap-1 lg:text-3xl text-2xl py-6">
        <RiGitRepositoryFill></RiGitRepositoryFill>
        <h1>My Tasks</h1>
      </div>
      <ul className="flex justify-end items-center p-5 gap-4 lg:text-xl">
        <li>
          <button className="button flex gap-2 items-center" onClick={onOpenModal}>Add Task <LuBadgePlus></LuBadgePlus></button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
