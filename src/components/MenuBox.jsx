import React from "react";
import MenuCard from "./MenuCard";

const MenuBox = () => {
  return (
    <div className="w-[1400px] h-[600px] bg-slate-100 rounded-xl">
      <div className="flex border-b h-10">
        <h3 className="p-2">Menus</h3>
      </div>
      <div className="ml-6 mt-4">
              <button className="bg-purple-500 p-2 rounded">+ Add New</button>
              <MenuCard />
      </div>
    </div>
  );
};

export default MenuBox;
