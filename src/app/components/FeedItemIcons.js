import React from "react";

function FeedItemIcons({ Icon, title, color }) {
  return (
    <>
      <div className="flex items-center gap-1 cursor-pointer py-1 px-2  hover:bg-gray-100 rounded-lg mt-1 transition ease-out duration-100  ">
        <Icon className="text-2xl " style={{ color: color }} />
        <h1 className="text-xs font-medium text-gray-500 ">{title}</h1>
      </div>
    </>
  );
}

export default FeedItemIcons;
