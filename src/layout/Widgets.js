import React from "react";
import { SearchIcon } from "../icons/icons";
import { Timeline } from "react-twitter-widgets";

const Widgets = () => {
  return (
    <aside className="w-80">
      <div className="flex items-center space-x-3 p-3 m-3 bg-gray-200 rounded-full text-gray-dark  focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
        <SearchIcon className="" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="placeholder-gray-dark bg-transparent focus-within:outline-none w-full text-sm "
        />
      </div>
      <div className="mt-4">
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "reactjs",
          }}
          options={{
            height: "950",
          }}
        />
      </div>
    </aside>
  );
};

export default Widgets;
