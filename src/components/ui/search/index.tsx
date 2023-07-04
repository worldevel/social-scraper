import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";

const Search = () => {
  return (
    <>
      <div className="relative max-w-[245px]">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-100 dark:bg-dark-700 px-4 py-2 text-[15px] rounded-md dark:text-white outline-none font-[400] pr-12"
        />
        <Icon
          path={mdiMagnify}
          size={1}
          className="absolute top-[50%] -translate-y-[50%] right-3 text-gray-400 dark:text-gray-500"
        />
      </div>
    </>
  );
};

export default Search;
