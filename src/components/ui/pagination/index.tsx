import React from "react";

// Types
import { pagination } from "@/types/pagination";

interface Props {
  numbers: pagination[];
}

const Pagination = ({ numbers }: Props) => {
  return (
    <>
      <ul className="flex items-center gap-3 justify-center">
        {numbers.map((number: pagination, key: number) => (
          <li
            key={key}
            className={` ${
              number.active ? "bg-primary-500 text-white" : ""
            } border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition w-[36px] h-[36px] text-sm rounded-full flex items-center justify-center cursor-pointer`}
          >
            {number.number}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
