import React from "react";

function Base({ children }) {
  return (
    <div className="w-full overflow-x-hidden">
      <nav className="flex h-20 items-center w-full justify-between flex-wrap bg-teal-500 p-4">
        <h2 className="text-white font-bold">
          DIMMY TECH PRACTICAL TEST - DADAN GUSNA
        </h2>
      </nav>
      <div className="h-full p-4">{children}</div>
    </div>
  );
}

export default Base;
